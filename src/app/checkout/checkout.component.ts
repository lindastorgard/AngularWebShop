import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICart } from '../Interfaces/ICart';
import { IOrderRows } from '../Interfaces/IOrderRows';
import * as moment from 'moment';
import { DataService } from '../Services/data.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../Services/message.service';
import { Router } from '@angular/router';

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
  deleted: boolean;
  isCartActive: boolean = true;
  cartMessage: string;
  cartItem: IMovie;

  constructor(private service: DataService, private fb: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit() {

    if (sessionStorage) {
      this.myCart = JSON.parse(sessionStorage.getItem("myStoredItems")) || [];
      this.toggleVisibility();

      this.service.getData().subscribe(
        (dataMovies) => {
          this.movies = dataMovies;
          this.orderRow = [];

          if (this.myCart) {
            this.myCart.forEach((cartItem) => {
              this.orderRow.push({ productId: cartItem.id, amount: 1 });
            })
          }

        });

      this.totalOrderAmount();

      let emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      this.formDetails = this.fb.group({
        'firstname': ['', Validators.required],
        'lastname': ['', Validators.required],
        'email': ['', [Validators.required, Validators.email, Validators.pattern(emailRegex)]]
      });

    }
  }

  deleteCartItem(id: number) {
    for (let i = 0; i < this.myCart.length; i++) {
      if (this.myCart[i].id === id) {
        this.myCart.splice(i, 1);
      }
    }
    this.toggleVisibility();

    if (this.myCart.length == 0 || this.myCart == null) {
      sessionStorage.clear();
    } else {
      sessionStorage.setItem("myStoredItems", JSON.stringify(this.myCart));
    }

    this.totalOrderAmount();
    this.messageService.setDeletedMessage(true);
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
 
    this.service.createOrder(this.checkoutItems).subscribe(
      (response) => console.log(response)
    );

    this.formDetails.reset();
    sessionStorage.clear();
    this.messageService.setDeletedMessage(true);

    setTimeout(() => {
      this.router.navigate(['thankyou']);
    }, 1500);
  }

  totalOrderAmount() {
    this.totalAmount = 0;
    for (var i = 0; i < this.myCart.length; i++) {
      this.cartItem = this.myCart[i];
      this.totalAmount += this.cartItem.price;
    }
  }

  toggleVisibility() {
    if (!sessionStorage || this.myCart == null || this.myCart.length == 0) {
      this.isCartActive = true;
      this.cartMessage = "Your cart is empty. Start browsing your favourite movies now by selecting a category.";
    } else {
      this.isCartActive = false;
    }
  }

}
