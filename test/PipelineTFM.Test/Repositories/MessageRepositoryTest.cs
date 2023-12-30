using System;
using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using LanguageExt;
using PipelineTFM.Domain.Entities;
using PipelineTFM.Domain.Repositories.Interfaces;
using PipelineTFM.Infrastructure.Data.Repositories;
using PipelineTFM.Test.Controllers;
using PipelineTFM.Test.Setup;
using Xunit;

namespace PipelineTFM.Test.Repositories;

public class MessageRepositoryTest
{
    private readonly AppWebApplicationFactory<TestStartup> _factory;

    public MessageRepositoryTest()
    {
        _factory = new AppWebApplicationFactory<TestStartup>();
    }

    [Fact]
    public async Task TestAddSaveMessage()
    {
        const int id = 1;
        const string author = "testAuthor";
        const string content = "test content";
        var publicationDate = DateTime.Now;

        var messageRepository = _factory.GetRequiredService<MessageRepository>();
        var messageEntity = new Message()
        {
            Id = id,
            Author = author,
            Content = content,
            PublicationDate = publicationDate
        };

        var insertedMessage = messageRepository.Add(messageEntity);
        int insertedNumber = await messageRepository.SaveChangesAsync();

        insertedNumber.Should().Be(1);
        insertedMessage.Id.Should().Be(id);
        insertedMessage.Author.Should().Be(author);
        insertedMessage.Content.Should().Be(content);
        insertedMessage.PublicationDate.Should().Be(publicationDate);
    }

    [Fact]
    public async Task TestGetMessagesEmpty()
    {
        var messageRepository = _factory.GetRequiredService<MessageRepository>();
        var messages = await messageRepository.GetAllAsync();
        messages.Count().Should().Be(0);
    }

    [Fact]
    public async Task TestSaveMessages()
    {
        const int messagesToAdd = 5;
        var messageRepository = _factory.GetRequiredService<MessageRepository>();

        var messagesNumber = await AddMessages(messagesToAdd, messageRepository);

        messagesNumber.Should().Be(messagesToAdd);
    }

    [Fact]
    public async Task TestSaveGetNMessagesCount()
    {
        const int messagesToAdd = 10;
        const int maxMessages = 5;
        var messageRepository = _factory.GetRequiredService<MessageRepository>();

        await AddMessages(messagesToAdd, messageRepository);

        var messages = await messageRepository.GetLastsAsync(maxMessages);
        messages.Count().Should().Be(maxMessages);
    }

    private static Task<int> AddMessages(int numberToAdd, IMessageRepository repository)
    {
        for (int i = 0; i < numberToAdd; i++)
        {
            repository.Add(new Message()
            {
                Author = TestUtil.RandomAlphabetic(5),
                Content = TestUtil.RandomAlphabetic(32),
                PublicationDate = DateTime.Now.AddSeconds(TestUtil.RandomInt(60))
            });
        }

        return repository.SaveChangesAsync();
    }
}
