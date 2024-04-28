import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaService } from './auth-prisma.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [{ provide: AuthService, useClass: AuthPrismaService }],
})
export class AuthModule {}
