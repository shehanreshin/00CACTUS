import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { CustomersService } from '../customers/customers.service';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from '../users/dtos/user-response.dto';

@Injectable()
export class AuthPrismaService implements AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly customersService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(credentials: LoginCredentialsDto): Promise<string> {
    const user = await this.validateLoginCredentials(credentials);

    switch (user.role) {
      case 'CUSTOMER':
        const customer = await this.customersService.findCustomerByUserId(
          user.id,
        );
        return this.jwtService.sign({ ...customer });
    }
  }

  validateLoginCredentials(
    credentials: LoginCredentialsDto,
  ): Promise<UserResponseDto> {
    return this.usersService.findUserByEmailAndPassword(
      credentials.email,
      credentials.password,
    );
  }
}
