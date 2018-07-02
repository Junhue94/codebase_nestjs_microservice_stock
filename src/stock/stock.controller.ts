import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockDetails } from './interfaces/stock.details';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Post()
    async create(@Body() createStockDto) {
        return this.stockService.create(createStockDto);
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
    update(@Param('id') id, @Body() updatedStockDto) {
        return this.stockService.update(id);
    }

    @Patch(':id')
    patch(@Param('id') id, @Body() updatedStockDto) {
        return this.stockService.patch(id);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        return this.stockService.remove(id);
    }
}