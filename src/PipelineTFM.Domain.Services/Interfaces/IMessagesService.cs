// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this

using System.Collections.Generic;
using System.Threading.Tasks;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Dto.Messages;

namespace PipelineTFM.Domain.Services.Interfaces;

public interface IMessagesService
{
    public List<MessageDto> GetMessages();
    public MessageDto PostMessage(MessageDto postedMessage);
}
