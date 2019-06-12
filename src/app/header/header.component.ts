import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myCart: IMovie[] = [];
  message: boolean;
  totalAmount: number;
  deleted: boolean;
  movieCounter: number;
  cartItem: IMovie;

  constructor(private messageService: MessageService) { }

  ngOnInit() {

    if (sessionStorage) {
      this.getSessionStorage();
    }

    this.messageService.messageInCart.subscribe(data => {
      this.message = data;

      if (data == true) {
        this.getSessionStorage();

        if (this.myCart) {
          this.movieCounter = this.myCart.length;
          this.totalOrderAmount();
        }
      }
    });

    this.messageService.messageInCheckout.subscribe(deletedData => {
      this.deleted = deletedData;

      if (deletedData == true) {
        this.getSessionStorage();

        if (this.myCart) {
          this.movieCounter = this.myCart.length;
          this.totalOrderAmount();
        }
      }
    });
  }

  totalOrderAmount() {
    this.totalAmount = 0;
    for (var i = 0; i < this.myCart.length; i++) {
      this.cartItem = this.myCart[i];
      this.totalAmount += this.cartItem.price;
    }
  }

  getSessionStorage(){
    this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
  }

}
