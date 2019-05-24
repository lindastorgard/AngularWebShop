import { Injectable } from '@angular/core';
import { IDataService } from '../Interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMovie } from '../Interfaces/IMovie';
import { ICategories } from '../Interfaces/ICategories';
import { IRandom } from '../Interfaces/IRandom';
// import { ISearch } from '../Interfaces/ISearch';
import { ICart } from '../Interfaces/ICart';


@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IMovie[]> {
    let apiURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
    return this.http.get<IMovie[]>(apiURL);
  }

  getCategories(): Observable<ICategories[]> {
    let apiURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
    return this.http.get<ICategories[]>(apiURL);
  }

  getRandom(): Observable<IRandom[]> {
    let apiURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/random?number=1';
    return this.http.get<IRandom[]>(apiURL);
  }

  createOrder(checkoutItems: ICart[]){
    return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', checkoutItems);
  }

  

  
  

  // getSearch(): Observable<ISearch[]> {
  //   return this.http.get<ISearch[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search');
  // }









}
