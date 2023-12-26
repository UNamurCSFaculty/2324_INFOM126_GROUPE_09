using System;
using System.ComponentModel.DataAnnotations;

namespace PipelineTFM.Dto.Messages;

public class MessageDto
{
    [Required]
    [MinLength(3)]
    [MaxLength(32)]
    public string Author { get; set; }

    [Required]
    [MaxLength(512)]
    public string Content { get; set; }

    public DateTime PublicationDate { get; set; }
}
