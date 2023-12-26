using PipelineTFM.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace PipelineTFM.Configuration;

public static class AppSettingsConfiguration
{
    public static IServiceCollection AddAppSettingsModule(this IServiceCollection services, IConfiguration configuration)
    {

        return services;
    }
}
