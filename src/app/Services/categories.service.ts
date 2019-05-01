import { Injectable } from '@angular/core';
import { ICategories } from '../Interfaces/ICategories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatService } from '../Interfaces/ICatService'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements ICatService {


  constructor(private http: HttpClient) { }

  getData(): Observable<ICategories[]>{
    return this.http.get<ICategories[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

}
