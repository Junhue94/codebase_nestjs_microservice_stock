import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
    create() {
        return 'Stock Create';
    }

    findAll() {
        return 'Stock Get All';
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