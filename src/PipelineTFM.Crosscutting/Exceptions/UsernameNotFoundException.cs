using System.Security.Authentication;

namespace PipelineTFM.Crosscutting.Exceptions;

public class UsernameNotFoundException : AuthenticationException
{
    public UsernameNotFoundException(string message) : base(message)
    {
    }
}
