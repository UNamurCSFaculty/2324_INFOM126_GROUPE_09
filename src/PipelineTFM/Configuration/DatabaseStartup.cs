using System;
using PipelineTFM.Infrastructure.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using PipelineTFM.Infrastructure.Configuration;

namespace PipelineTFM.Configuration;

public static class DatabaseConfiguration
{
    public static IServiceCollection AddDatabaseModule(this IServiceCollection services, IConfiguration configuration)
    {
        string connectionString = null;
        string databaseUrl = configuration.GetValue<string>("DATABASE_URL");

        if (!String.IsNullOrEmpty(databaseUrl) && Uri.IsWellFormedUriString(databaseUrl, UriKind.RelativeOrAbsolute))
        {
            Console.WriteLine("DATABASE_URL will be used to create the connection string.");
            //  Parse the connection string
            var databaseUri = new Uri(databaseUrl);
            string db = databaseUri.LocalPath.TrimStart('/');
            string[] userInfo = databaseUri.UserInfo.Split(':', StringSplitOptions.RemoveEmptyEntries);

            switch (databaseUri.Scheme)
            {
                case "postgres":
                    connectionString = $"Server={databaseUri.Host};Port={databaseUri.Port};Database={db};User Id={userInfo[0]};Password={userInfo[1]};Integrated Security=true;Pooling=true;MinPoolSize=0;MaxPoolSize=20;";
                    break;
                case "mysql":
                    connectionString = $"Server={databaseUri.Host};Port={databaseUri.Port};Database={db};User={userInfo[0]};Password={userInfo[1]};Pooling=true;MinimumPoolSize=0;MaximumPoolsize=10;";
                    break;
                case "mssql":
                    connectionString = $"Server={databaseUri.Host};Port={databaseUri.Port};Database={db};User={userInfo[0]};Password={userInfo[1]};Trusted_Connection=False;Pooling=true;Encrypt=True;TrustServerCertificate=True;";
                    break;
                case "mongodb":
                    connectionString = $"Server={databaseUri.Host};Port={databaseUri.Port};Database={db};User={userInfo[0]};Password={userInfo[1]};Pooling=true;MinimumPoolSize=0;MaximumPoolsize=10;";
                    break;
                default:
                    Console.WriteLine("It was not possible to determine the database type provided by DATABASE_URL");
                    break;
            }
        }
        else
        {
            connectionString = configuration.GetConnectionString("AppDbContext");
        }

        // Opt out of the new timestamp mapping logic for postgres (https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic)
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        services.AddDbContext<ApplicationDatabaseContext>(context => { context.UseNpgsql(connectionString); });

        services.AddScoped<DbContext>(provider => provider.GetService<ApplicationDatabaseContext>());

        return services;
    }

    public static IApplicationBuilder UseApplicationDatabase(this IApplicationBuilder app, IHostEnvironment environment)
    {
        if (environment.IsDevelopment() || environment.IsProduction())
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDatabaseContext>();
                context.Database.OpenConnection();
                context.Database.EnsureCreated();
            }
        }

        return app;
    }
}
