import { Injectable, BadRequestException } from '@nestjs/common';
import { StockResultInterface } from './interfaces/stock-result.interface';
import { setDeleted } from '../utils/helper';
import db from '../models';

const Stock = db.Stock;

@Injectable()
export class StockService {
    create(stock) {
        return Stock
            .create(stock)
            .then(res => res)
            .catch(err => {
                throw new BadRequestException('Error in creating Stock', err);
            });
    }

    findAll(req): StockResultInterface {
        return Stock
            .findAll()
            .then(res => {
                return {
                    offset: 1,
                    currentPage: 1,
                    totalRows: 1,
                    totalPage: 1,
                    sortField: null,
                    sortSeq: null,
                    filter: null,
                    data: res
                };
            })
            .catch(err => {
                throw new BadRequestException('Error in retrieving all Stock', err);
            });
    }

    findOne(id: string) {
        return Stock
            .findById(id)
            .then(res => res)
            .catch(err => {
                throw new BadRequestException(`Error in retrieving Stock with id ${id}`, err);
            });
    }

    update(id: string, stockDetails) {
        return Stock
            .update(stockDetails, {
                where: { id },
                limit: 1
            })
            .then(() => stockDetails)
            .catch(err => {
                throw new BadRequestException(`Error in updating Stock with id ${id}`, err);
            });
    }

    remove(id: string) {
        return Stock
            .update(setDeleted, {
                where: { id },
                limit: 1
            })
            .then(() => id)
            .catch(err => {
                throw new BadRequestException(`Error in removing Stock with id ${id}`, err);
            });
    }
}