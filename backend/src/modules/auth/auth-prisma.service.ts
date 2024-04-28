import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';

@Injectable()
export class AuthPrismaService implements AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateLoginCredentials(credentials: LoginCredentialsDto) {
    const user = await this.usersService.findUserByEmailAndPassword(
      credentials.email,
      credentials.password,
    );
  }
}
