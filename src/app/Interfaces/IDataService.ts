import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { ICategories } from './ICategories';

export interface IDataService {
    getData(): Observable<IMovie[]>;
    getCategories(): Observable<ICategories[]>;
}