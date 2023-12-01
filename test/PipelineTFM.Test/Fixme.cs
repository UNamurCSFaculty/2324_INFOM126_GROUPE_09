using PipelineTFM.Infrastructure.Data;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Test.Setup;

namespace PipelineTFM.Test;

public static class Fixme
{
    public static User ReloadUser<TEntryPoint>(AppWebApplicationFactory<TEntryPoint> factory, User user)
        where TEntryPoint : class, IStartup, new()
    {
        var applicationDatabaseContext = factory.GetRequiredService<ApplicationDatabaseContext>();
        applicationDatabaseContext.Entry(user).Reload();
        return user;
    }
}
