import { Component, Input } from '@angular/core';
import { Message } from 'app/entities/message.model';

@Component({
  standalone: true,
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: Message = {
    author: '',
    content: '',
    publicationDate: new Date(),
  };

  public printDate(date: Date) {
    // Important since date won't considered as a Date
    const toDate: Date = new Date(date);
    return `${this.getAtLeastTwoDigits(toDate.getDate())}/${this.getAtLeastTwoDigits(toDate.getMonth())}/${this.getAtLeastTwoDigits(
      toDate.getFullYear(),
    )} 
    ${this.getAtLeastTwoDigits(toDate.getHours())}:${this.getAtLeastTwoDigits(toDate.getMinutes())}:${this.getAtLeastTwoDigits(
      toDate.getSeconds(),
    )}`;
  }

  private getAtLeastTwoDigits(unit: number): string {
    const numAsStr = unit.toString();
    return numAsStr.length >= 2 ? numAsStr : `0${numAsStr}`;
  }

  ngOnInit() {}
}
