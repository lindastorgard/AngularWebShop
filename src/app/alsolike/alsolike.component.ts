import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';

@Component({
  selector: 'app-alsolike',
  templateUrl: './alsolike.component.html',
  styleUrls: ['./alsolike.component.css']
})
export class AlsolikeComponent implements OnInit {

  movies: IMovie[];
  categories: ICategories[];

  category: ICategories = { id: 0, name: '' };
  categoryMovies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  alsolikeMov: IMovie[] = [];

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {


    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        // console.log("Router id from category:", movieId);
        this.getMovie(+movieId);

        this.service.getData().subscribe(
          (dataMovies) => {
            this.movies = dataMovies;
            console.log("All movies: ", dataMovies);

            console.log(this.movie.productCategory[0].categoryId);

            this.alsolikeMov = [];
            for (let i = 0; i < dataMovies.length; i++) {
              const categoryAlsoLikeMovies = dataMovies[i];
              for (let y = 0; y < categoryAlsoLikeMovies.productCategory.length; y++) {
                if (this.movie.productCategory[0].categoryId == categoryAlsoLikeMovies.productCategory[+y].categoryId) {
                  this.alsolikeMov.push(categoryAlsoLikeMovies);
                }
              }
            }
            // console.log("new", categoryAlsoLikeMovies.name);
            console.log("This is category movie array", this.alsolikeMov);
          });
      }
    )
  }

  getMovie(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      // console.log("My movie details: ", this.movie);
      // console.log(this.movie.productCategory[0].categoryId);
    })
  }
}
