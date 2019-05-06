import { Observable, Observer } from 'rxjs';
import { IMovie } from './IMovie';
import { ICategories } from './ICategories';
import { IRandom } from './IRandom';
import { ISearch } from './ISearch';

export interface IDataService {
    getData(): Observable<IMovie[]>;
    getCategories(): Observable<ICategories[]>;
    getRandom(): Observable<IRandom[]>;
    // getSearch(): Observable<ISearch[]>;
}