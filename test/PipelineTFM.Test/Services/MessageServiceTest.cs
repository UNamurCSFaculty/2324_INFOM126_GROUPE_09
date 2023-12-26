using System;
using System.Threading.Tasks;
using FluentAssertions;
using PipelineTFM.Domain.Services;
using PipelineTFM.Domain.Services.Interfaces;
using PipelineTFM.Dto.Messages;
using PipelineTFM.Infrastructure.Data;
using PipelineTFM.Test.Controllers;
using PipelineTFM.Test.Setup;
using Serilog;
using Xunit;

namespace PipelineTFM.Test.Services;

public class MessageServiceTest
{
    private readonly AppWebApplicationFactory<TestStartup> _factory;

    public MessageServiceTest()
    {
        _factory = new AppWebApplicationFactory<TestStartup>();
    }

    [Fact]
    public void TestPostGetMessage()
    {
        const string authorName = "testAuthor";
        const string content = "test content";

        var service = _factory.GetRequiredService<MessagesService>();

        service.PostMessage(new MessageDto()
        {
            Author = authorName,
            Content = content
        });

        var messages = service.GetMessages();

        messages.Should().HaveCount(1);

        var message = messages[0];
        message.Author.Should().Be(authorName);
        message.Content.Should().Be(content);
    }

    [Fact]
    public void TestPostGetMultipleMessages()
    {
        const int numberOfMessages = 10;
        var service = _factory.GetRequiredService<MessagesService>();
        PostMultipleMessages(numberOfMessages, service);
        var messages = service.GetMessages();

        messages.Should().HaveCount(numberOfMessages);
    }

    [Fact]
    public void TestPostGetMultipleMessagesMaxN()
    {
        const int numberOfMessages = 10;
        const int maxNumberOfMessages = 5;
        var service = _factory.GetRequiredService<MessagesService>();
        PostMultipleMessages(numberOfMessages, service);
        var messages = service.GetMessages(maxNumberOfMessages);

        messages.Should().HaveCount(maxNumberOfMessages);
    }

    private void PostMultipleMessages(int messagesToPost, IMessagesService service)
    {
        for (int i = 0; i < messagesToPost; i++)
        {
            var message = new MessageDto()
            {
                Author = TestUtil.RandomAlphabetic(5),
                Content = TestUtil.RandomAlphabetic(32)
            };
            service.PostMessage(message);
        }
    }
}
