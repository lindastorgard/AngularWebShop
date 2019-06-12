import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-alsolike',
  templateUrl: './alsolike.component.html',
  styleUrls: ['./alsolike.component.css']
})
export class AlsolikeComponent implements OnInit {

  movies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, imageUrl: '', description: '', productCategory: [] };
  alsolikeMov: IMovie[] = [];

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (myParams) => {
        let movieId = +myParams.get('id');
        this.getMovie(+movieId);

        this.service.getData().subscribe(
          (dataMovies) => {
            this.movies = dataMovies;

            this.alsolikeMov = [];
            for (let i = 0; i < dataMovies.length; i++) {
              const categoryAlsoLikeMovies = dataMovies[i];
              for (let y = 0; y < categoryAlsoLikeMovies.productCategory.length; y++) {
                if (this.movie.productCategory[0].categoryId == categoryAlsoLikeMovies.productCategory[+y].categoryId) {
                  this.alsolikeMov.push(categoryAlsoLikeMovies);
                }
              }
            }

            for (let z = 0; z < this.alsolikeMov.length; z++) {
              if (movieId == this.alsolikeMov[+z].id) {
                this.alsolikeMov.splice(z, 1);
              }
            }
          });
      });
  }

  getMovie(id: number) {
    this.service.getData().subscribe(
      (data) => {
        this.movie = data.find(a => a.id === id);
      });
  }
}
