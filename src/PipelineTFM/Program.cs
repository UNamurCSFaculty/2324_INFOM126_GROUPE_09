using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Serilog;
using System;
using System.IO;
using PipelineTFM;
using PipelineTFM.Configuration;
using IStartup = PipelineTFM.IStartup;

try
{
    var webAppOptions = new WebApplicationOptions
    {
        ContentRootPath = Directory.GetCurrentDirectory(),
        EnvironmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"),
        WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "dist"),
        Args = args
    };
    var builder = WebApplication.CreateBuilder(webAppOptions);

    builder.Logging.AddSerilog(builder.Configuration);

    IStartup startup = new Startup();

    startup.Configure(builder.Configuration, builder.Services);
    startup.ConfigureServices(builder.Services, builder.Environment);

    WebApplication app = builder.Build();

    startup.ConfigureMiddleware(app, app.Environment);
    startup.ConfigureEndpoints(app, app.Environment);

    app
        .MapGet("/",
            () =>
            "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

    app.Run();

    return 0;
}
catch (Exception ex)
{
    Log.ForContext<Program>().Fatal(ex, "Host terminated unexpectedly");
    return 1;
}
finally
{
    Log.CloseAndFlush();
}
