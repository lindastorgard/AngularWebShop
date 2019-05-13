import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Interfaces/Category';
import { MockDataService } from '../Services/mock-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  movies: IMovie[];
  categories: ICategories[];
  category: ICategories;
  categoryMovies: IMovie[];
  catMov = [];

  constructor(private route: ActivatedRoute, private service: DataService) { }
  

  ngOnInit() {

    this.route.params.subscribe(
      (myParams) => {
        let categoryId = myParams['id'];
        // console.log("Router id from footer:", categoryId);
        this.getCategory(+categoryId);

        /* Get all movies, loop then loop productCategory of movie
         * Compare category Id with movie category Id
         * Push to new array */
        this.service.getData().subscribe(
          (dataMovies) => {
            this.movies = dataMovies;
            console.log("All movies: ", dataMovies);

            this.catMov = [];
            for (let i = 0; i < dataMovies.length; i++) {
              const categoryMovies = dataMovies[i];
              for (let y = 0; y < categoryMovies.productCategory.length; y++) {
                if (categoryId == categoryMovies.productCategory[+y].categoryId) {
                  this.catMov.push(categoryMovies);
                }
              }
            }

            // console.log("This is: ", categoryId, this.catMov);
            // console.log("There should be 12 Action(5)");
            // console.log("There should be 10 Thriller(6)");
            // console.log("There should be 10 Comedy(7)");
            // console.log("There should be 10 Sci-fi(8)");





            // Subscribe for all categories
            // this.service.getCategories().subscribe((dataCategories) => {
            //   this.categories = dataCategories;
            //   console.log("All categories: ", dataCategories);
            // });

          });

      });


  }

  getCategory(id: number) {
    this.service.getCategories().subscribe(data => {
      this.category = data.find(a => a.id === id);
      // console.log("Whole category: ", this.category);
    })
  }
}