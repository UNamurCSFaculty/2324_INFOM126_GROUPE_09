using System.Collections.Generic;
using System.Threading.Tasks;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Dto.Messages;

namespace PipelineTFM.Domain.Services.Interfaces;

public interface IMessagesService
{
    public List<MessageDto> GetMessages();

    public List<MessageDto> GetMessages(int number);
    public MessageDto PostMessage(MessageDto postedMessage);
}
