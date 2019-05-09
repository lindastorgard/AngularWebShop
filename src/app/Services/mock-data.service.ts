import { Injectable } from '@angular/core';
import { IDataService } from '../Interfaces/IDataService';
import { IMovie } from '../Interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { ICategories } from '../Interfaces/ICategories';
import { IRandom } from '../Interfaces/IRandom';
import { ISearch } from '../Interfaces/ISearch';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService{

  // mock-data for movies
  movies: IMovie[] = [
    { id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '',productCategory: [{categoryId: []}] },
    { id: 2, name: 'Movie 2', price: 45, description: 'Two star movie', imageUrl: '', productCategory: [{categoryId: []}] },
    { id: 3, name: 'Movie 3', price: 69, description: 'Three star movie', imageUrl: '', productCategory: [{categoryId: []}] },
    { id: 4, name: 'Movie 4', price: 69, description: 'Four star movie', imageUrl: '', productCategory: [{categoryId: []}] }
  ];

  getData(): Observable<IMovie[]> {
    return of(this.movies);
  };

  // mock-data for categories
  categories: ICategories[] = [
    { id: 1, name: 'Thriller' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Sci-fi' },
    { id: 4, name: 'Horror' }
  ];

  getCategories(): Observable<ICategories[]> {
    return of(this.categories);
  };


  // mock-data for random
  random: IRandom[] = [
    { id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '' }
  ];

  getRandom(): Observable<IRandom[]> {
    return of(this.random);
  };

  // mock-data for search
  // search: ISearch[] = [
  //   { id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '' }
  // ];

  // getSearch(): Observable<ISearch[]>{
  //   return of(this.search);
  // };

  



  constructor() { }
}
