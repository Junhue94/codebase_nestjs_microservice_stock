import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { logger } from '../logger';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.getStatus();
        const error = exception.getResponse();

        logger.error(JSON.stringify(error));

        response.status(statusCode).json({
            statusCode,
            error,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
}