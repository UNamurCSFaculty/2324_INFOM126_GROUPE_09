using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PipelineTFM.Domain.Entities;

public class Message : BaseEntity<long>
{
    [Required]
    [MinLength(3)]
    [MaxLength(32)]
    public string Author { get; set; }
    
    [Required]
    [MaxLength(512)]
    [Column("message_content")]
    public string Content { get; set; }
    
    [Required]
    [Column("publication_date")]
    public DateTime PublicationDate { get; set; }
}
