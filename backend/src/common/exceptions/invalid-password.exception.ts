import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPasswordException extends HttpException {
  constructor() {
    super('Incorrect password', HttpStatus.UNAUTHORIZED);
  }
}
