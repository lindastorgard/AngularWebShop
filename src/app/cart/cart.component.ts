import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { ICart } from '../Interfaces/ICart';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  // cartItemsList: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  cartItemsList = [];
  listFromStorage = [];

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    // this.route.paramMap.subscribe(
    //   (myParams) => {
    //     let movieId = +myParams.get('id');
    //     this.getMovie(+movieId);
    //     console.log("Router id from details:", movieId);
    //   }
    // )
  // }


  // getMovie(id: number) {
  //   this.service.getData().subscribe(data => {
  //     this.movie = data.find(a => a.id === id);
  //     console.log("My movie details: ", this.movie);

  //     this.cartItemsList.push(this.movie);
  //     localStorage.setItem("myStoredList", JSON.stringify(this.cartItemsList));
  //     let myList = localStorage.getItem("myStoredList");
      
  //     this.listFromStorage = [];
  //     if (myList) {
  //       this.listFromStorage = JSON.parse(myList);
  //   }
  //     console.log("Cart item list: ", myList);

  //     // console.log("Cart item list: ", this.cartItemsList);
  //   })
  }




}
