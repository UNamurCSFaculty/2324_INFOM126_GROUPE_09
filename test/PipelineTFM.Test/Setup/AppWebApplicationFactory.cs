using System;
using PipelineTFM.Test.Configuration;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.JsonWebTokens;

namespace PipelineTFM.Test.Setup;

public class AppWebApplicationFactory<TEntryPoint> : WebApplicationFactory<TEntryPoint>
    where TEntryPoint : class, IStartup, new()
{
    private IStartup _startup;
    private IServiceProvider _serviceProvider;

    public AppWebApplicationFactory()
    {
        _startup = new TEntryPoint();
    }

    protected override IWebHostBuilder CreateWebHostBuilder()
    {
        return WebHost.CreateDefaultBuilder()
            .ConfigureServices((context, services) =>
            {
                _startup.Configure(context.Configuration, services);
                _startup.ConfigureServices(services, context.HostingEnvironment);
            });
    }

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder
            .UseSolutionRelativeContentRoot("src/PipelineTFM")
            .ConfigureServices(services =>
            {
                services
                    .AddMvc(TestMvcStartup.ConfigureMvcAuthorization());
                services.Replace(new ServiceDescriptor(typeof(IHttpContextFactory), typeof(MockHttpContextFactory),
                    ServiceLifetime.Transient));
            })
            .Configure((context, applicationBuilder) =>
            {
                _serviceProvider = applicationBuilder.ApplicationServices;
                _startup.ConfigureMiddleware(applicationBuilder, context.HostingEnvironment);
                _startup.ConfigureEndpoints(applicationBuilder, context.HostingEnvironment);
            });
    }

    public TService GetRequiredService<TService>()
    {
        return _serviceProvider.GetRequiredService<TService>();
    }
}
