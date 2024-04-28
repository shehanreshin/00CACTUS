import { HttpException, HttpStatus } from '@nestjs/common';

export class UnregisteredEmailException extends HttpException {
  constructor() {
    super('This email is unregistered', HttpStatus.FORBIDDEN);
  }
}
