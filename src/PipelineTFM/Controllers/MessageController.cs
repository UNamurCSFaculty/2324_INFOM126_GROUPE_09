using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PipelineTFM.Domain.Services.Interfaces;
using PipelineTFM.Dto.Messages;

namespace PipelineTFM.Controllers;

[Route("api/messages")]
[ApiController]
public class MessageController : ControllerBase
{
    private readonly IMessagesService _service;
    
    public MessageController(IMessagesService service)
    {
        _service = service;
    }

    [HttpGet("")]
    public ActionResult<IList<MessageDto>> GetMessages()
    {
        var messages = _service.GetMessages();
        return Ok(messages);
    }

    [HttpPost("")]
    public ActionResult<MessageDto> PostMessage([FromBody] MessageDto messageDto)
    {
        var entity = _service.PostMessage(messageDto);
        return Ok(entity);
    }
}
