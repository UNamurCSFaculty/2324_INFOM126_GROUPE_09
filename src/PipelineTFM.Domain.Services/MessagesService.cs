using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Domain.Repositories.Interfaces;
using PipelineTFM.Domain.Services.Interfaces;
using PipelineTFM.Dto.Messages;
using Serilog;

namespace PipelineTFM.Domain.Services;

public class MessagesService : IMessagesService
{
    private readonly IMessageRepository _repository;
    private readonly IMapper _mapper;

    public MessagesService(IMessageRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    public List<MessageDto> GetMessages()
    {
        return _repository
            .GetAllAsync()
            .Result
            .Select(msgEntity => _mapper.Map<MessageDto>(msgEntity))
            .ToList();
    }

    public List<MessageDto> GetMessages(int number)
    {
        return _repository.GetLastsAsync(number)
            .Result
            .Select(msgEntity => _mapper.Map<MessageDto>(msgEntity))
            .ToList();
    }

    public MessageDto PostMessage(MessageDto postedMessage)
    {
        postedMessage.PublicationDate = DateTime.Now;
        var addedMessage = _repository.Add(_mapper.Map<Message>(postedMessage));
        _repository.SaveChangesAsync();
        return _mapper.Map<MessageDto>(addedMessage);
    }
}
