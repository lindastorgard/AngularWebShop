import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  movies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  myStoredItemsList: IMovie[] = [{ id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] }];
  message: boolean;


  constructor(private route: ActivatedRoute, private service: DataService, private messageService: MessageService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        // console.log("Router id from category:", movieId);
        this.getMovie(+movieId);
      }
    )
  }

  // addToCart(id: number) {

  //   this.service.getData().subscribe(data => {
  //     this.movie = data.find(a => a.id === id);
  //     // console.log("My add to cart details: ", this.movie);

  //     if (sessionStorage.getItem("myStoredItems") == null) {
  //       sessionStorage.setItem("myStoredItems", JSON.stringify([this.movie]));
  //       // console.log("Movie from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
  //     } else {
  //       let myStoredItemsList: IMovie[] = [];
  //       myStoredItemsList = JSON.parse(sessionStorage.getItem("myStoredItems"));
  //       myStoredItemsList.push(this.movie);
  //       sessionStorage.setItem("myStoredItems", JSON.stringify(myStoredItemsList));
  //       console.log("Movies from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
  //     }

  //     this.messageService.setMessage(true);
  //   });
  // }

  addToCart(movieId: number) {

    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === movieId);

      if (sessionStorage.getItem("myStoredItems") == null) {
        sessionStorage.setItem("myStoredItems", JSON.stringify([this.movie]));
        // console.log("Movie from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
      } else {
        let myStoredItemsList: IMovie[] = [];
        myStoredItemsList = JSON.parse(sessionStorage.getItem("myStoredItems"));
        console.log("movie list from storage: ", myStoredItemsList);
        // console.log("movie id: ", this.movie.id);

        for (let i = 0; i < myStoredItemsList.length; i++) {
          if (myStoredItemsList[i].id !== this.movie.id) {
            myStoredItemsList.push(this.movie);
            sessionStorage.setItem("myStoredItems", JSON.stringify(myStoredItemsList));
          }
        }
      }
      console.log("Movies from sessionStorage", JSON.parse(sessionStorage.getItem("myStoredItems")));
      this.messageService.setMessage(true);
    });
  }



  getMovie(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      // console.log("My movie details: ", this.movie);
    });
  }
}


