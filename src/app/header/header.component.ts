import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { MessageService } from '../Services/message.service';
import { Subscription } from 'rxjs';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myCart: IMovie[] = [];
  message: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit() {

    if(sessionStorage){
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
    }

    this.messageService.messageInCart.subscribe(data => {
      this.message = data;
      console.log(data);

      if (data == true) {
        this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
        console.log(this.myCart);
      }
    });
  }
}
