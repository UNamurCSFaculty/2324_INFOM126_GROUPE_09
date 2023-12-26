using System;
using System.Net;
using System.Threading.Tasks;
using FluentAssertions;
using FluentAssertions.Json;
using Newtonsoft.Json.Linq;
using PipelineTFM.Dto.Messages;
using PipelineTFM.Test.Setup;
using Xunit;

namespace PipelineTFM.Test.Controllers;

public class MessageControllerTest
{
    private readonly AppWebApplicationFactory<TestStartup> _factory;

    public MessageControllerTest()
    {
        _factory = new AppWebApplicationFactory<TestStartup>();
    }

    [Fact]
    public async Task TestGetMessage()
    {
        var httpClient = _factory.CreateClient();
        var response = await httpClient.GetAsync("/api/messages");
        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task TestPostValidMessage()
    {
        var httpClient = _factory.CreateClient();
        var message = new MessageDto()
        {
            Author = "testAuthor",
            Content = "test content",
            PublicationDate = DateTime.Now
        };

        var response = await httpClient.PostAsync("/api/messages", TestUtil.ToJsonContent(message));
        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var jToken = JToken.Parse(await response.Content.ReadAsStringAsync());
        jToken.Should().HaveElement("author").And.HaveElement("content").And.HaveElement("publicationDate");
    }

    [Fact]
    public async Task TestPostMessageAuthorNameTooShort()
    {
        var httpClient = _factory.CreateClient();
        var message = new MessageDto()
        {
            Author = "a",
            Content = "test content",
            PublicationDate = DateTime.Now
        };

        var response = await httpClient.PostAsync("/api/messages", TestUtil.ToJsonContent(message));
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task TestPostMessageAuthorNameTooLong()
    {
        var httpClient = _factory.CreateClient();
        var message = new MessageDto()
        {
            Author = TestUtil.RandomAlphabetic(33),
            Content = "test content",
            PublicationDate = DateTime.Now
        };

        var response = await httpClient.PostAsync("/api/messages", TestUtil.ToJsonContent(message));
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task TestPostMessageContentTooLong()
    {
        var httpClient = _factory.CreateClient();
        var message = new MessageDto()
        {
            Author = "testAuthor",
            Content = TestUtil.RandomAlphabetic(513),
            PublicationDate = DateTime.Now
        };

        var response = await httpClient.PostAsync("/api/messages", TestUtil.ToJsonContent(message));
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task TestGetNMessagesReturnsOk()
    {
        var httpClient = _factory.CreateClient();
        var response = await httpClient.GetAsync("/api/messages?number=10");
        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }
}
