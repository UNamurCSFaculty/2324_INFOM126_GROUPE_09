import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Message } from 'app/entities/message.model';
import { MessageComponent } from 'app/layouts/message/message.component';
import { MessagesService } from 'app/services/messages.service';

import SharedModule from 'app/shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SharedModule, RouterModule, MessageComponent],
})
export default class HomeComponent {
  messages: Observable<Message[]> = new Observable<Message[]>();

  constructor(private messageService: MessagesService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messages.subscribe(e => console.log(e));
  }
}
