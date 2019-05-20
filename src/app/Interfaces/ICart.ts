import { IOrderRows } from './IOrderRows';

export interface ICart{
    id: number, 
    companyId: number, 
    created: string, 
    createdBy: number, 
    paymentMethod: number, 
    totalPrice: number, 
    status: number, 
    orderRows: IOrderRows[];
}