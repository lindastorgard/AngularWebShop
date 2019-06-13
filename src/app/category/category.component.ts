import { Component, OnInit } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  movies: IMovie[];
  category: ICategories = { id: 0, name: '' };
  catMov: IMovie[] = [];

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let categoryId = +myParams.get('id');
        this.getCategory(+categoryId);

        this.service.getData().subscribe(
          (dataMovies) => {
            this.movies = dataMovies;

            this.catMov = [];
            for (let i = 0; i < dataMovies.length; i++) {
              const categoryMovies = dataMovies[i];
              for (let y = 0; y < categoryMovies.productCategory.length; y++) {
                if (categoryId == categoryMovies.productCategory[+y].categoryId) {
                  this.catMov.push(categoryMovies);
                }
              }
            }
          });
      });
  }

  getCategory(id: number) {
    this.service.getCategories().subscribe(
      (data) => {
        this.category = data.find(a => a.id === id);
      })
  }
}