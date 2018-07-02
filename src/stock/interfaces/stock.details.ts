export interface StockDetails {
    readonly id: number;
    readonly type: string;
    readonly entryDate: Date;
    readonly exitDate: Date;
    readonly name: string;
    readonly sector: string;
    readonly country: string;
    readonly currency: string;
    readonly priceBuy: number;
    readonly priceSell: number;
    readonly priceProfitTarget: number;
    readonly priceStopLoss: number;
    readonly quantityBuy: number;
    readonly quantitySell: number;
    readonly totalDividend: number;
    readonly totalCapital: number;
    readonly capitalReturn: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly isDeleted: boolean;
}