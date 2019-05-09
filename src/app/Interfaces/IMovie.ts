export interface IMovie {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    productCategory: [{categoryId: []}];
}