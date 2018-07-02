import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { StockModule } from '../../src/stock/stock.module';
import { StockService } from '../../src/stock/stock.service';
import { INestApplication } from '@nestjs/common';

describe('Stock', () => {
    let app: INestApplication;
    let stockService = { findAll: () => ['test'] };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [StockModule],
        })
            .overrideProvider(StockService)
            .useValue(stockService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it(`/GET stock`, () => {
        return request(app.getHttpServer())
            .get('/stock')
            .expect(200)
            .expect(stockService.findAll());
    });

    afterAll(async () => {
        await app.close();
    });
});
