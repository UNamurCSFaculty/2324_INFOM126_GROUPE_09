import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Message } from 'app/entities/message.model';
import { MessageComponent } from 'app/layouts/message/message.component';
import { SendFormComponent } from 'app/layouts/send-form/send-form.component';
import { MessagesService } from 'app/services/messages.service';

import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'tfm-home',
  templateUrl: './home.component.html',
  styleUrls: [],
  imports: [CommonModule, RouterModule, MessageComponent, SendFormComponent],
})
export default class HomeComponent {
  messages: Observable<Message[]> = new Observable<Message[]>();

  constructor(private messageService: MessagesService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messages = this.messageService.getMessages();
  }
}
