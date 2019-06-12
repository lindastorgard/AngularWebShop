import { PipeTransform, Pipe } from '@angular/core';
import { IMovie } from '../Interfaces/IMovie';

@Pipe({
    name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform{
    transform(movies: IMovie[], searchTerm: string): IMovie[]{
        if(!movies || !searchTerm){
            return movies;
        }

        return movies.filter(movies =>
            movies.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}
