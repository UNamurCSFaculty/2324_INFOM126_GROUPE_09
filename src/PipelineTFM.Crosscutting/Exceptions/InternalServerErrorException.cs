using PipelineTFM.Crosscutting.Constants;

namespace PipelineTFM.Crosscutting.Exceptions;

public class InternalServerErrorException : BaseException
{
    public InternalServerErrorException(string message) : base(ErrorConstants.DefaultType, message)
    {
    }
}
