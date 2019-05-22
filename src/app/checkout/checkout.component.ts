import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  myCart: IMovie[] = [];

  constructor() { }

  ngOnInit() {

    if (sessionStorage) {
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
      console.log(this.myCart);
    }
  }

}
