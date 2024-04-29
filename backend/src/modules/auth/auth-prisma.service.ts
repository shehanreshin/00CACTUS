import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { CustomersService } from '../customers/customers.service';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from '../users/dtos/user-response.dto';
import { CustomerResponseDto } from '../customers/dto/customer-response.dto';

@Injectable()
export class AuthPrismaService implements AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly customersService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateLoginCredentials(
    credentials: LoginCredentialsDto,
  ): Promise<string> {
    const user = await this.usersService.findUserByEmailAndPassword(
      credentials.email,
      credentials.password,
    );

    let response: CustomerResponseDto;

    switch (user.role) {
      case 'CUSTOMER': {
        response = await this.customersService.findCustomerByUserId(user.id);
        break;
      }
    }

    return this.jwtService.sign({ ...response });
  }
}
