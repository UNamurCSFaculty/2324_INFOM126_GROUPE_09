using PipelineTFM.Crosscutting.Constants;

namespace PipelineTFM.Crosscutting.Exceptions;

public class EmailNotFoundException : BaseException
{
    public EmailNotFoundException() : base(ErrorConstants.EmailNotFoundType, "Email address not registered")
    {
    }
}
