import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'app/entities/message.model';
import { MessagesService } from 'app/services/messages.service';

@Component({
  standalone: true,
  selector: 'tfm-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: [],
  imports: [FormsModule, ReactiveFormsModule],
})
export class SendFormComponent {
  messageForm: FormGroup = this.formBuilder.group({
    author: '',
    content: '',
  });

  @Output() messagePosted: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private messageService: MessagesService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    const message: Message = {
      author: this.messageForm.value['author'],
      content: this.messageForm.value['content'],
    };
    this.messageService.postMessage(message).subscribe(message => {
      this.messagePosted.emit();
      this.clearForm();
    });
  }

  private clearForm(): void {
    this.messageForm.reset();
  }
}
