import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaService } from './auth-prisma.service';
import { UsersModule } from '../users/users.module';
import { CustomersModule } from '../customers/customers.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { PassportModule } from '@nestjs/passport';
import { PassportLocalStrategy } from './strategies/passport-local.strategy';
import { PassportJwtStrategy } from "./strategies/passport-jwt.strategy";

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    JwtModule.register({ secret: process.env.ACCESS_TOKEN_KEY }),
    PassportModule,
  ],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [
    { provide: AuthService, useClass: AuthPrismaService },
    PassportLocalStrategy,
    PassportJwtStrategy,
  ],
})
export class AuthModule {}
