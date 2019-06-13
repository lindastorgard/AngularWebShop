import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor() { }

  private movieDetailSource = new Subject<boolean>();
  private movieCheckoutSource = new Subject<boolean>();

  messageInCart = this.movieDetailSource.asObservable();
  messageInCheckout = this.movieCheckoutSource.asObservable();

  setMessage(message: boolean){
    this.movieDetailSource.next(message);
  }

  setDeletedMessage(deleted: boolean){
    this.movieCheckoutSource.next(deleted);
  }

}
