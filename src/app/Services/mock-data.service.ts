import { Injectable } from '@angular/core';
import { IDataService } from '../Interfaces/IDataService';
import { IMovie } from '../Interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { ICategories } from '../Interfaces/ICategories';
import { IRandom } from '../Interfaces/IRandom';
import { ICart } from '../Interfaces/ICart';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  // mock-data for movies
  movies: IMovie[] = [
    { id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '#', productCategory: [{ categoryId: 1, category: 'Action' }, { categoryId: 2, category: 'Thriller' }] },
    { id: 2, name: 'Movie 2', price: 45, description: 'Two star movie', imageUrl: '#', productCategory: [{ categoryId: 1, category: 'Action' }, { categoryId: 2, category: 'Thriller' }] },
    { id: 3, name: 'Movie 3', price: 69, description: 'Three star movie', imageUrl: '#', productCategory: [{ categoryId: 1, category: 'Action' }, { categoryId: 2, category: 'Thriller' }] },
    { id: 4, name: 'Movie 4', price: 69, description: 'Four star movie', imageUrl: '#', productCategory: [{ categoryId: 1, category: 'Action' }, { categoryId: 2, category: 'Thriller' }] }
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
    { id: 1, name: 'Movie 1', price: 69, description: 'One star movie', imageUrl: '#' }
  ];

  getRandom(): Observable<IRandom[]> {
    return of(this.random);
  };


  // mock-data for createOrder
  cartItems = [
    { id: 1, companyId: 16, created: '0001-01-01T00:00:00', createdBy: null, paymentMethod: null, totalPrice: 169, status: 0, orderRows: [{ productId: 1, amount: 1 }] },
    { id: 2, companyId: 16, created: '0001-01-01T00:00:00', createdBy: null, paymentMethod: null, totalPrice: 234, status: 0, orderRows: [{ productId: 5, amount: 1 }] }
  ];

  createOrder(cartItems: []): Observable<ICart[]> {
    return of(this.cartItems);
  }


  // mock-data for getOrder() and deleteOrder()
  itemsInDB = [
    { id: 1, companyId: 16, created: '0001-01-01T00:00:00', createdBy: null, paymentMethod: null, totalPrice: 234, status: 0, orderRows: [{ productId: 2, amount: 1 }] },
    { id: 2, companyId: 16, created: '0001-01-01T00:00:00', createdBy: null, paymentMethod: null, totalPrice: 234, status: 0, orderRows: [{ productId: 5, amount: 1 }] }
  ];

  getOrder(): Observable<ICart[]> {
    return of(this.itemsInDB);
  }

  deleteOrder(id: number): Observable<ICart[]> {
    for (let i = 0; i < this.itemsInDB.length; i++) {
      if (this.itemsInDB[i].id === id) {
        this.itemsInDB.splice(i, 1);
      }
    }
    return of(this.itemsInDB);
  }

  constructor() { }
}
