import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { CategoriesService } from '../Services/categories.service';
import { ICategories } from '../Interfaces/ICategories';
import { merge } from 'rxjs';
import { extend } from 'webdriver-js-extender';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[];
  categories: ICategories[];




  // constructor(private service: DataService) { }
  constructor(private dataService1: DataService, private dataService2: CategoriesService) { }
  // constructor(private service: MockDataService) { }

  ngOnInit() {
    this.dataService1.getData().subscribe(
      (dataMovies) => { this.movies = dataMovies, console.log(dataMovies) }
    );

    this.dataService2.getData().subscribe(
      (dataCategories) => { this.categories = dataCategories, console.log(dataCategories) }
    );

  }



}
