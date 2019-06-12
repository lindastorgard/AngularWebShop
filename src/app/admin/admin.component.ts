import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ICart } from '../Interfaces/ICart';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders: ICart[];
  message: string;

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getOrder().subscribe(
      (myOrder) => {
        this.orders = myOrder;

        if (myOrder.length == 0) {
          this.message = "Oops, there are no orders at the moment."
        }

      });
  }

  deleteOrder(id) {
    this.service.deleteOrder(id).subscribe(
      data => {
        this.service.getOrder().subscribe(
          (myOrder) => {
            this.orders = myOrder;
          });

        if (this.orders.length <= 1) {
          this.message = "Oops, there are no orders at the moment."
        }
      });
  }

}

