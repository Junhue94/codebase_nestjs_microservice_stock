import { StockDetailsInterface } from './stock-details.interface';

export interface StockResultInterface {
    readonly offset: number;
    readonly currentPage: number;
    readonly totalRows: number;
    readonly totalPage: number;
    readonly sortField: string;
    readonly sortSeq: string;
    readonly filter: string;
    readonly data: StockDetailsInterface[];
}