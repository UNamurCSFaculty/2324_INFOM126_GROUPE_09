using System.Collections.Generic;
using System.Threading.Tasks;
using PipelineTFM.Domain.Entities;

namespace PipelineTFM.Domain.Repositories.Interfaces;

public interface IMessageRepository
{
    Task<IEnumerable<Message>> GetAllAsync();
    Message Add(Message message);
    Task<int> SaveChangesAsync();
}
