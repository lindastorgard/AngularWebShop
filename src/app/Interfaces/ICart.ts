import { IOrderRow } from './IOrderRows';

export interface ICart{
    companyId: number, 
    created: string, 
    createdBy: string, 
    paymentMethod: string, 
    totalPrice: number, 
    status: number, 
    orderRows: IOrderRow[];
}