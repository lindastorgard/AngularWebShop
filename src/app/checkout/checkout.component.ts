import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICart } from '../Interfaces/ICart';
import { IOrderRows } from '../Interfaces/IOrderRows';
import * as moment from 'moment';
import { DataService } from '../Services/data.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  now = moment().format();
  myCart: IMovie[] = [];
  checkoutItems: ICart;
  movies: IMovie[];
  formDetails: FormGroup;
  totalAmount: number;
  orderRow: IOrderRows[];

  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit() {

    console.log(this.now);

    if (sessionStorage) {
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
      console.log("myCart", this.myCart);

      this.service.getData().subscribe(
        (dataMovies) => {
          this.movies = dataMovies;

          this.orderRow = [];
          this.myCart.forEach((cartItem) => {
            this.orderRow.push({ ProductId: cartItem.id, Amount: 1 });
          })
        });

      this.totalAmount = 0;
      for (var i = 0; i < this.myCart.length; i++) {
        var item = this.myCart[i];
        this.totalAmount += item.price;
      }

      this.formDetails = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });

    }
  }

  setOrder() {
    this.checkoutItems = {
      companyId: 16,
      created: this.now,
      createdBy: this.formDetails.value.email,
      paymentMethod: null,
      totalPrice: this.totalAmount,
      status: 0,
      orderRows: this.orderRow
    };
    console.log("my items", this.checkoutItems);
    console.log(this.orderRow);

    this.service.createOrder(this.checkoutItems).subscribe(
      response => console.log(response)
    );

    sessionStorage.clear();
  }
}
