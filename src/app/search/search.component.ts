import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { IMovie } from '../Interfaces/IMovie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchTerm: string;
  movies: IMovie[];

  constructor(private service: DataService) { }

  ngOnInit(): void {

    this.service.getData().subscribe(
      (data) => {
        this.movies = data;
      });

  }

}
