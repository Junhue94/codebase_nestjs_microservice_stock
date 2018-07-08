import { Controller, Get, Post, Put, Delete, Param, Body, Req } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockResultInterface } from './interfaces/stock-result.interface';

@Controller('api/stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Post()
    async create(@Body() stockDetails) {
        return this.stockService.create(stockDetails);
    }

    @Get()
    async findAll(@Req() req): Promise<StockResultInterface> {
        return this.stockService.findAll(req);
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