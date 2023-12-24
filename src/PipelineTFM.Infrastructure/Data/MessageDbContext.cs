using Microsoft.EntityFrameworkCore;
using PipelineTFM.Domain.Entities;

namespace PipelineTFM.Infrastructure.Data;

public class MessageDbContext : DbContext
{
    public DbSet<Message> Messages { get; set; }

    public MessageDbContext(DbContextOptions options) : base(options)
    {
        // Default constructor calling parent class constructor
    }
}
