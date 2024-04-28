import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaService } from './auth-prisma.service';
import { UsersModule } from '../users/users.module';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [UsersModule, CustomersModule],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [{ provide: AuthService, useClass: AuthPrismaService }],
})
export class AuthModule {}
