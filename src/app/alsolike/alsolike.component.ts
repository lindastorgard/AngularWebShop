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
  finalMovieArray: IMovie[] = [];

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
            // console.log("All movies: ", dataMovies);
            // console.log(this.movie.productCategory[0].categoryId);

            this.alsolikeMov = [];
            for (let i = 0; i < dataMovies.length; i++) {
              const categoryAlsoLikeMovies = dataMovies[i];
              for (let y = 0; y < categoryAlsoLikeMovies.productCategory.length; y++) {
                if (this.movie.productCategory[0].categoryId == categoryAlsoLikeMovies.productCategory[+y].categoryId) {
                  this.alsolikeMov.push(categoryAlsoLikeMovies);
                }
              }
            }
            // Remove the details movie from alsolike-list
            for (let z = 0; z < this.alsolikeMov.length; z++) {
              if (movieId == this.alsolikeMov[+z].id) {
                this.alsolikeMov.splice(z, 1);
              }
            }
            // console.log("New category movie array", this.alsolikeMov);
            // console.log("Final category movie array", this.finalMovieArray);
            // console.log("This is my movie", this.movie.id);
            // console.log("This is movie from array", categoryAlsoLikeMovies.id);
            // console.log("New category movie array", this.alsolikeMov);
            
          });
      }
    )
  }

  getMovie(id: number) {
    this.service.getData().subscribe(data => {
      this.movie = data.find(a => a.id === id);
      // console.log("This movie details: ", this.movie.id);
      // console.log(this.movie.productCategory[0].categoryId);
    })
  }
}
