import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { UserResponseDto } from '../users/dtos/user-response.dto';

export abstract class AuthService {
  abstract validateLoginCredentials(
    credentials: LoginCredentialsDto,
  ): Promise<UserResponseDto>;
  abstract login(credentials: LoginCredentialsDto): Promise<string>;
}
