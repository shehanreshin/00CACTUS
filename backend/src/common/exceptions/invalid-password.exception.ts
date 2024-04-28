import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPasswordException extends HttpException {
  constructor() {
    super('Invalid login credentials', HttpStatus.FORBIDDEN);
  }
}
