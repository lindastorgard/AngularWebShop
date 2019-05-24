import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  // missionAnnouncesSource
  private movieDetailSource = new Subject<boolean>();

  // missionAnnounced$
  messageInCart = this.movieDetailSource.asObservable();

  // announceMission
  setMessage(message: boolean){
    this.movieDetailSource.next(message);
  }

}
