import {
    enumStockType,
    enumStockSector,
    enumStockCountry,
    enumStockCurrency
} from './enum';

export const stockModel = DataTypes => {
    return {
        type: {
            type: DataTypes.ENUM,
            values: enumStockType
        },
        entryDate: DataTypes.DATE,
        exitDate: DataTypes.DATE,
        name: DataTypes.STRING,
        sector: {
            type: DataTypes.ENUM,
            values: enumStockSector
        },
        country: {
            type: DataTypes.ENUM,
            values: enumStockCountry
        },
        currency: {
            type: DataTypes.ENUM,
            values: enumStockCurrency
        },
        priceBuy: DataTypes.FLOAT,
        priceSell: DataTypes.FLOAT,
        priceProfitTarget: DataTypes.FLOAT,
        priceStopLoss: DataTypes.FLOAT,
        quantityBuy: DataTypes.INTEGER,
        quantitySell: DataTypes.INTEGER,
        totalDividend: DataTypes.FLOAT,
        totalCapital: DataTypes.FLOAT,
        capitalReturn: DataTypes.FLOAT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        isDeleted: DataTypes.BOOLEAN
    }
};
