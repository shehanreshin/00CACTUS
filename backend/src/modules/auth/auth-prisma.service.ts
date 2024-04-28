import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthPrismaService implements AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly customersService: CustomersService,
  ) {}
  async validateLoginCredentials(credentials: LoginCredentialsDto) {
    const user = await this.usersService.findUserByEmailAndPassword(
      credentials.email,
      credentials.password,
    );

    switch (user.role) {
      case 'CUSTOMER':
        return this.customersService.findCustomerByUserId(user.id);
    }
  }
}
