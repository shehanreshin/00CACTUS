import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let message = 'Operation failed';
    const error = 'Invalid Data Submission';

    if (exception.code === 'P2002') {
      message = `The submitted data does not meet the required uniqueness criteria on field ${exception.meta.target}`;
    }

    response.status(500).json({
      message: message,
      error: error,
      statusCode: 500,
    });
  }
}
