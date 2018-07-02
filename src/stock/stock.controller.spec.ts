import { Test } from '@nestjs/testing';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';

describe('StockController', () => {
    let stockController: any = StockController;
    let stockService: any = StockService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [StockController],
            providers: [StockService]
        }).compile();

        stockController = module.get<StockController>(StockController);
        stockService = module.get<StockService>(StockService);
    });

    describe('findAll', () => {
        it('should return an array of stocks', async () => {
            const result = ['test'];
            jest.spyOn(stockService, 'findAll').mockImplementation(() => result);
            expect(await stockController.findAll()).toBe(result);
        });
    });
});