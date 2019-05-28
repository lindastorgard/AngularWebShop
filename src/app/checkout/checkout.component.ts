import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICart } from '../Interfaces/ICart';
import { IOrderRows } from '../Interfaces/IOrderRows';
import * as moment from 'moment';
import { DataService } from '../Services/data.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


export class Constants {
  dateTimeFormat = 'YYYY-MM-DD HH:mm'
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  now = moment().format(new Constants().dateTimeFormat);
  myCart: IMovie[] = [];
  checkoutItems: ICart;
  orderRows: IOrderRows[];
  movies: IMovie[];
  errorMessage = '';
  checkoutDetails: FormGroup;




  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit() {

    if (sessionStorage) {
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems"));
      // console.log(this.myCart);

      this.service.getData().subscribe(
        (dataMovies) => {
          this.movies = dataMovies;
          // console.log(this.movies);

          let orderRows: IOrderRows[] = [];
          this.myCart.forEach((cartItem) => {
            orderRows.push({ ProductId: cartItem.id, Amount: 1 });
          })

          // console.log("E-mail:", this.email.value);


        });

      this.checkoutDetails = this.fb.group({
        // firstname: ['', Validators.required],
        // lastname: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]]

        firstname: [''],
        lastname: [''],
        email: ['']
      });

    
    } else {
      this.errorMessage = "Your cart is empty.";
    }

  }


  setOrder() {
    this.checkoutItems = {
      companyId: 16,
      created: this.now,
      createdBy: this.checkoutDetails.value.email,
      paymentMethod: null,
      totalPrice: 0,
      status: 0,
      orderRows: this.orderRows

      // companyId: number, 
      // created: string, 
      // createdBy: string, 
      // paymentMethod: string, 
      // totalPrice: number, 
      // status: number, 
      // orderRows: IOrderRows[];
    }
    console.log("my items", this.checkoutItems);
    
    // this.service.createOrder(this.checkoutItems).subscribe(
    //   response => console.log(response)
    // );
  }
}


