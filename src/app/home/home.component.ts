import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ICategories } from '../Interfaces/ICategories';
import { merge, Observable } from 'rxjs';
import { extend } from 'webdriver-js-extender';
import { IRandom } from '../Interfaces/IRandom';
import { ISearch } from '../Interfaces/ISearch';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  random: IRandom[];


  // movies ska flyttas till category sidan
  // movies: IMovie[]; 
  // categories: ICategories[];
  // search: ISearch[];


  constructor(private service: DataService) { }
  // constructor(private service: MockDataService) { }

  ngOnInit() {



    this.service.getRandom().subscribe(
      (dataRandom) => { this.random = dataRandom, console.log(dataRandom) }
    );



    // this.service.getSearch().subscribe(
    //   (dataSerch) => { this.search = dataSerch, console.log(dataSerch) }
    // );



    // movies ska flytta till category sidan!!!

    // this.service.getData().subscribe(
    //   (dataMovies) => { this.movies = dataMovies, console.log(dataMovies) }
    // );



    //flyttad till footer!!!

    // this.service.getCategories().subscribe(
    //   (dataCategories) => 
    //   { 
    //     this.categories = dataCategories; 
    //     console.log(dataCategories) 
    //   });

    






  }
}


