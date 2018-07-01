import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { StockModule } from './stock/stock.module';

@Module({
    imports: [
        StockModule,
        CatsModule
    ]
})
export class ApplicationModule {}