import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Post()
    async create() {
        return this.stockService.create();
    }

    @Get()
    async findAll() {
        return this.stockService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.stockService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id) {
        return this.stockService.update(id);
    }

    @Patch(':id')
    patch(@Param('id') id) {
        return this.stockService.patch(id);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        return this.stockService.remove(id);
    }
}