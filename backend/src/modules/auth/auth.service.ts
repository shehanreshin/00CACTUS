import { LoginCredentialsDto } from './dto/login-credentials.dto';

export abstract class AuthService {
  abstract validateLoginCredentials(credentials: LoginCredentialsDto);
}
