using System;
using PipelineTFM.Test.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Options;

namespace PipelineTFM.Test.Setup;

public class MockHttpContextFactory : IHttpContextFactory
{
    private readonly DefaultHttpContextFactory _delegate;

    public MockHttpContextFactory(IOptions<FormOptions> formOptions,
        IServiceProvider serviceProvider)
    {
        _delegate = new DefaultHttpContextFactory(serviceProvider);
    }

    public MockHttpContextFactory(IOptions<FormOptions> formOptions, IHttpContextAccessor httpContextAccessor,
        IServiceProvider serviceProvider)
    {
        _delegate = new DefaultHttpContextFactory(serviceProvider);
    }

    public HttpContext Create(IFeatureCollection featureCollection)
    {
        var httpContext = _delegate.Create(featureCollection);
        return httpContext;
    }

    public void Dispose(HttpContext httpContext)
    {
        _delegate.Dispose(httpContext);
    }
}
