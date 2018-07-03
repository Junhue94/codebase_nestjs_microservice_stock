import { Injectable, BadRequestException } from '@nestjs/common';
import { StockDetails } from './interfaces/stock.details';
import { logger } from '../common/logger';
import db from '../models';

const Stock = db.Stock;

@Injectable()
export class StockService {
    create(stock) {
        return Stock.create(stock)
            .then(res => {
                logger.info(`Create Stock ${JSON.stringify(res)}`);
                return res;
            })
            .catch(err => {
                logger.error(err);
                throw new BadRequestException('/stock create', err)
            });
    }

    findAll(): StockDetails[] {
        return [
            {
                id: 1,
                type: 'Current',
                entryDate: new Date(),
                exitDate: null,
                name: 'UOB',
                sector: 'Banking',
                country: 'SG',
                currency: 'S$',
                priceBuy: 10.5,
                priceSell: null,
                priceProfitTarget: 15.2,
                priceStopLoss: 10.1,
                quantityBuy: 500,
                quantitySell: null,
                totalDividend: 50.25,
                totalCapital: 1250.5,
                capitalReturn: null,
                createdAt: new Date(),
                updatedAt: null,
                isDeleted: false
            }
        ];
    }

    findOne(id: string) {
        return `Stock get id: #${id}`;
    }

    update(id: string) {
        return `Stock update id: #${id}`;
    }

    patch(id: string) {
        return `Stock patch id: #${id}`;
    }

    remove(id: string) {
        return `Stock Delete: #${id}`;
    }
}