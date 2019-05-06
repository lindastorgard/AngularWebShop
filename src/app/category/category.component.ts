import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  movies: IMovie[];
  categories: ICategories[];

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getData().subscribe(
      (dataMovies) => { this.movies = dataMovies, console.log(dataMovies) }
    );

    this.service.getCategories().subscribe(
      (dataCategories) => { this.categories = dataCategories, console.log(dataCategories) }
    );
  }


  
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
