using AutoMapper;
using System.Linq;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Dto.Messages;


namespace PipelineTFM.Configuration.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Message, MessageDto>();
        CreateMap<MessageDto, Message>();
    }
}
