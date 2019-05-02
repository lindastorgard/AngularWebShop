import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { DataService } from '../Services/data.service';
import { MockDataService } from '../Services/mock-data.service';
import { ICategories } from '../Interfaces/ICategories';
import { merge } from 'rxjs';
import { extend } from 'webdriver-js-extender';
import { IRandom } from '../Interfaces/IRandom';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[];
  categories: ICategories[];
  random: IRandom[];



  // constructor(private service: DataService) { }
  constructor(private service: DataService) { }
  // constructor(private service: MockDataService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (dataMovies) => { this.movies = dataMovies, console.log(dataMovies) }
    );

    this.service.getCategories().subscribe(
      (dataCategories) => { this.categories = dataCategories, console.log(dataCategories) }
    );

    this.service.getRandom().subscribe(
      (dataRandom) => { this.random = dataRandom, console.log(dataRandom)}
    );



  //   let arr1 = [
  //     { id: "abdc4051", date: "2017-01-24" },
  //     { id: "abdc4052", date: "2017-01-22" }
  // ];
  
  // let arr2 = [
  //     { id: "abdc4051", name: "ab" },
  //     { id: "abdc4052", name: "abc" }
  // ];
  
  // const mergeById = (a1: IMovie[], a2: ICategories[]) =>
  //     a1.map(itm => ({
  //         ...a2.find((category) => (category.id === itm.id) && item),
  //         ...itm
  //     }));
  
  // console.log(mergeById(a1, a2));

  }



}
