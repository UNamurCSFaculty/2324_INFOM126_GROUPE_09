using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JHipsterNet.Core.Pagination;
using JHipsterNet.Core.Pagination.Extensions;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Security;
using PipelineTFM.Domain.Services.Interfaces;
using PipelineTFM.Dto;
using PipelineTFM.Web.Extensions;
using PipelineTFM.Web.Filters;
using PipelineTFM.Web.Rest.Problems;
using PipelineTFM.Web.Rest.Utilities;
using PipelineTFM.Crosscutting.Constants;
using PipelineTFM.Crosscutting.Exceptions;
using PipelineTFM.Infrastructure.Web.Rest.Utilities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PipelineTFM.Controllers;


[Route("api/users")]
[ApiController]
public class PublicUsersController : ControllerBase
{
    private readonly ILogger<UsersController> _log;
    private readonly IMapper _mapper;
    private readonly IUserService _userService;

    public PublicUsersController(ILogger<UsersController> log, IUserService userService, IMapper mapper)
    {
        _log = log;
        _userService = userService;
        _mapper = mapper;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetAllPublicUsers(IPageable pageable)
    {
        _log.LogDebug("REST request to get a page of Users");
        var page = await _userService.GetAllPublicUsers(pageable);
        var userDtos = page.Content.Select(user => _mapper.Map<UserDto>(user));
        var headers = page.GeneratePaginationHttpHeaders();
        return Ok(userDtos).WithHeaders(headers);
    }

}
