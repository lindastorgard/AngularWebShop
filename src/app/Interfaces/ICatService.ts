import { Observable } from 'rxjs';
import { ICategories } from './ICategories';

export interface ICatService {
    getData(): Observable<ICategories[]>;
}