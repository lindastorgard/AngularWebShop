import { Injectable } from '@angular/core';
import { IDataService } from '../Interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getCategories(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }
}
