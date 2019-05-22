import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';
import { ICart } from '../Interfaces/ICart';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  movies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  myStoredItemsList: IMovie[] = [{ id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] }];

  // cartItem: ICart;
  // cartItemList: ICart[];

  // cartItemsList: ICart[];
  // cartItem: ICart = {id: 0, price: 0};

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        // console.log("Router id from category:", movieId);
        this.getMovie(+movieId);
      }
    )
  }

  addToCart(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      // console.log("My add to cart details: ", this.movie);

      if (sessionStorage.getItem("myStoredItems") == null) {
        sessionStorage.setItem("myStoredItems", JSON.stringify(this.movie));
        // console.log("Movie from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
      } else {
        let myStoredItemsList = [];
        myStoredItemsList = JSON.parse(sessionStorage.getItem("myStoredItems"));
        myStoredItemsList.push(this.movie);
        sessionStorage.setItem("myStoredItems", JSON.stringify(myStoredItemsList));
        console.log("Movies from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
      }
    });
  }


  getMovie(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      // console.log("My movie details: ", this.movie);
    });
  }


}


