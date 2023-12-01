using System.Threading.Tasks;
using PipelineTFM.Domain.Entities;

namespace PipelineTFM.Domain.Services.Interfaces;

public interface IMailService
{
    Task SendPasswordResetMail(User user);
    Task SendActivationEmail(User user);
    Task SendCreationEmail(User user);
}
