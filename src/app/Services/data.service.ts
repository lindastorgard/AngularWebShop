import { Injectable } from '@angular/core';
import { IDataService } from '../Interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';
import { IRandom } from '../Interfaces/IRandom';
import { ISearch } from '../Interfaces/ISearch';
import { ICart } from '../Interfaces/ICart';


@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getCategories(): Observable<ICategories[]> {
    let apiURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
    return this.http.get<ICategories[]>(apiURL);
  }

  getRandom(): Observable<IRandom[]> {
    return this.http.get<IRandom[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/random?number=1');
  }

  
  

  // getSearch(): Observable<ISearch[]> {
  //   return this.http.get<ISearch[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search');
  // }









}
