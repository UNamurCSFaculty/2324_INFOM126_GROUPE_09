using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Domain.Repositories.Interfaces;

namespace PipelineTFM.Infrastructure.Data.Repositories;

public class MessageRepository: IMessageRepository
{
    private readonly MessageDbContext _dbContext;
    
    public MessageRepository(MessageDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<Message>> GetAllAsync() => await _dbContext.Messages.ToListAsync();

    public async Task<IEnumerable<Message>> GetLastsAsync(int number)
    {
        return await _dbContext.Messages
            .OrderByDescending(msg => msg.PublicationDate)
            .Take(number)
            .ToListAsync();
    }

    public Message Add(Message message)
    {
        var savedMessage = _dbContext.Add(message).Entity;
        return savedMessage;
    }

    public async Task<int> SaveChangesAsync() => await _dbContext.SaveChangesAsync();
}
