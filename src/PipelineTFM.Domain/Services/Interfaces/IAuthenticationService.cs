using System.Security.Principal;
using System.Threading.Tasks;

namespace PipelineTFM.Domain.Services.Interfaces;

public interface IAuthenticationService
{
    Task<IPrincipal> Authenticate(string username, string password);
}
