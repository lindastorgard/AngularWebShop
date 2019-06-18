import { IMovieCategory } from './IMovieCategory';

export interface IMovie {
    id: number;
    added: string;
    year: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    productCategory: IMovieCategory[];
}