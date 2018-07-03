import * as Config from 'config';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { requestLog } from './common/middlewares/requestLog.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { logger } from './common/logger';
import { pgConnect } from './database';

const appConfig: any = Config.get('app');

const bootstrap = async () => {
    await pgConnect();

    const app = await NestFactory.create(ApplicationModule);
    app.use(requestLog);
    app.useGlobalFilters(new HttpExceptionFilter());

    await app.listen(appConfig.port, () => logger.info(`Server :: Started on http://${appConfig.host}:${appConfig.port}`));
};

bootstrap();