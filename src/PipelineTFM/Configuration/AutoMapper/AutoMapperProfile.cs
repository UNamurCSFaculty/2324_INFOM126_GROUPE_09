using AutoMapper;
using System.Linq;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Dto.Messages;


namespace PipelineTFM.Configuration.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        /*CreateMap<Message, MessageDto>()
            .ForMember(
                messageDto => messageDto.Author,
                opt => opt.MapFrom(message => message.Author)
            )
            .ForMember(
                messageDto => messageDto.Content,
                opt => opt.MapFrom(message => message.Content)
            )
            .ForMember(messageDto => messageDto.PublicationDate,
                opt => opt.MapFrom(message => message.PublicationDate)
            );*/

        CreateMap<Message, MessageDto>();
        CreateMap<MessageDto, Message>();

        /*CreateMap<User, UserDto>()
            .ForMember(userDto => userDto.Roles, opt => opt.MapFrom(user => user.UserRoles.Select(iur => iur.Role.Name).ToHashSet()))
        .ReverseMap()
            .ForPath(user => user.UserRoles, opt => opt.MapFrom(userDto => userDto.Roles.Select(role => new UserRole { Role = new Role { Name = role }, UserId = userDto.Id }).ToHashSet()));*/
    }
}
