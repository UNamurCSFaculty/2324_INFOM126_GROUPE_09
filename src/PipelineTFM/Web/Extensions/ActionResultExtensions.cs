using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PipelineTFM.Web.Extensions;

[ExcludeFromCodeCoverage]
public static class ActionResultExtensions
{
    public static ActionResult WithHeaders(this ActionResult receiver, IHeaderDictionary headers)
    {
        return new ActionResultWithHeaders(receiver, headers);
    }
}
