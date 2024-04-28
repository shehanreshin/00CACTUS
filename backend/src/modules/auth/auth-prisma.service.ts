import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthPrismaService implements AuthService {
  constructor(private readonly usersService: UsersService) {}
  validateUserCredentials() {
    throw new Error('Method not implemented.');
  }
}
