import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[];

  // constructor(private service: DataService) { }
  constructor(private service: MockDataService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (dataMovies) => { this.movies = dataMovies, console.log(dataMovies)}
    );
  }

}
