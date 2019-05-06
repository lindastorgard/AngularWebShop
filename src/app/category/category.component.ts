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

    // function printCategory(dataMovies: IMovie[], dataCategories: ICategories[]){
    //   for (let i=0; i < dataMovies.length; i++){
    //     console.log(this.movies.id);
    //   }
    // }


    // let myArray = ["ett", "två"];

    // for (let i = 0; i < myArray.length; i++) {

    //   console.log(myArray[i]);

    // }

  //   json1 = [
  //     {id:1, test: 0},
  //     {id:2, test: 0},
  //     {id:3, test: 0},
  //     {id:4, test: 0},
  //     {id:5, test: 0}
  // ];
  
  // json2 = [
  //     {id:1, test: 1},
  //     {id:3, test: 1},
  //     {id:5, test: 1}
  // ];
  
  // this.movies.map(x => Object.assign(x, this.categories.find(y => y.id == x.categoryId)));
  // }


  // <p>Category: {{movie.productCategory[0].categoryId}}</p>
  //       <p *ngIf='movie.productCategory[1]'>Category: {{movie.productCategory[1].categoryId}}</p> -->




  

  
  // console.log(mergeById(a1, a2));
}
}
