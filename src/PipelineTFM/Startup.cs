using System;
using PipelineTFM.Infrastructure.Data;
using PipelineTFM.Configuration;
using PipelineTFM.Infrastructure.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

[assembly: ApiController]

namespace PipelineTFM;

public class Startup : IStartup
{
    public virtual void Configure(IConfiguration configuration, IServiceCollection services)
    {
        services
            .AddAppSettingsModule(configuration);


        AddDatabase(configuration, services);
    }

    public virtual void ConfigureServices(IServiceCollection services, IHostEnvironment environment)
    {
        services
            .AddProblemDetailsModule(environment)
            .AddAutoMapperModule()
            .AddSwaggerModule()
            .AddWebModule()
            .AddRepositoryModule()
            .AddServiceModule();
    }

    public virtual void ConfigureMiddleware(IApplicationBuilder app, IHostEnvironment environment)
    {
        app
            .UseApplicationProblemDetails()
            .UseApplicationDatabase(environment);
    }

    public virtual void ConfigureEndpoints(IApplicationBuilder app, IHostEnvironment environment)
    {
        app
            .UseApplicationSwagger()
            .UseApplicationWeb(environment);
    }

    protected virtual void AddDatabase(IConfiguration configuration, IServiceCollection services)
    {
        services.AddDatabaseModule(configuration);
    }
}
