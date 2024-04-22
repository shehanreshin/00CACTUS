import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersPrismaService } from './customers-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomersController } from './customers.controller';
import { AddressesModule } from '../addresses/addresses.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PrismaModule, AddressesModule, UsersModule],
  exports: [CustomersService],
  providers: [{ provide: CustomersService, useClass: CustomersPrismaService }],
  controllers: [CustomersController],
})
export class CustomersModule {}
