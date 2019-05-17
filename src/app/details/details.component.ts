import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        console.log("Router id from category:", movieId);
        this.getMovie(+movieId);
      }
    )
  }

  getMovie(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      console.log("My movie details: ", this.movie);
    })
  }

}
