import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(email: string, password: string) {
    return this.authService.validateLoginCredentials({ email, password });
  }
}
