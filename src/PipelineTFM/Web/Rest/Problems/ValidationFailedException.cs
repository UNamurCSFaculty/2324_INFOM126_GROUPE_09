using System.Diagnostics.CodeAnalysis;
using Hellang.Middleware.ProblemDetails;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace PipelineTFM.Web.Rest.Problems;

[ExcludeFromCodeCoverage]
public class ValidationFailedProblem : ProblemDetailsException
{
    public ValidationFailedProblem(ModelStateDictionary modelState) : base(new ValidationProblemDetails(modelState))
    {
    }
}
