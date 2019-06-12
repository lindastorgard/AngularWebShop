import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: Observable<IMovie[]>;
  private searchTerms = new Subject<string>();
  // term: string;
  // searchData: IMovie[];

  constructor(private service: DataService, private router: Router) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  

  ngOnInit(): void {

    // this.movies = this.searchTerms.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((term: string) => this.service.searchMovies(term)),
      
    // );
    console.log(this.movies);



    

  }

}
