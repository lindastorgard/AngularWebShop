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

  movie: IMovie = { id: 0, added: '', year: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  cartMessage: string;
  myStoredItemsList: IMovie[] = [];

  constructor(private route: ActivatedRoute, private service: DataService, private messageService: MessageService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        this.getMovie(+movieId);
      });

  }

  addToCart(id: number) {
    this.service.getData().subscribe(
      (data) => {
        this.movie = data.find(a => a.id === id);

        if (sessionStorage.getItem("myStoredItems") == null || !sessionStorage) {
          this.myStoredItemsList.push(this.movie);
          sessionStorage.setItem("myStoredItems", JSON.stringify([this.movie]));
        } else {
          this.myStoredItemsList = JSON.parse(sessionStorage.getItem("myStoredItems")) || [];

          let foundMovie = false;
          for (let index = 0; index < this.myStoredItemsList.length; index++) {
            if (id === this.myStoredItemsList[index].id) {
              foundMovie = true;
            }
          }

          if (foundMovie) {
            this.cartMessage = "Movie is already in your cart."
          }

          if (!foundMovie) {
            this.myStoredItemsList.push(this.movie);
            sessionStorage.setItem("myStoredItems", JSON.stringify(this.myStoredItemsList));
          }
        }

        this.messageService.setMessage(true);
      });
  }

  getMovie(id: number) {
    this.service.getData().subscribe(
      (data) => {
        this.movie = data.find(a => a.id === id);
      });
  }

}
