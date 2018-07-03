import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockDetails } from './interfaces/stock.details';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Post()
    async create(@Body() stockDetails) {
        return this.stockService.create(stockDetails);
    }

    @Get()
    async findAll(): Promise<StockDetails[]> {
        return this.stockService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.stockService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() stockDetails) {
        return this.stockService.update(id, stockDetails);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        return this.stockService.remove(id);
    }
}