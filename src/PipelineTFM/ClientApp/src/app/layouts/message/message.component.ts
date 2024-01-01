import { Component, Input } from '@angular/core';
import { Message } from 'app/entities/message.model';

@Component({
  standalone: true,
  selector: 'tfm-message',
  templateUrl: './message.component.html',
  styleUrls: [],
})
export class MessageComponent {
  @Input() message: Message = {
    author: '',
    content: '',
    publicationDate: new Date(),
  };

  public printDate(date: Date | undefined) {
    // Important since date won't be considered as a Date somehow
    console.log(typeof date);
    const toDate: Date = date ? new Date(date) : new Date();

    return toDate.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
