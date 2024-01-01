import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { Message } from 'app/entities/message.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private readonly apiUrl = this.applicationConfigService.getEndpointFor('api/messages');
  private readonly maxMessages = 10;

  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService,
  ) {}

  public postMessage(message: Message): Observable<Message> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Message>(this.apiUrl, message, httpOptions);
  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}?number=${this.maxMessages}`);
  }
}
