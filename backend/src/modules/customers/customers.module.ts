import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersPrismaService } from './customers-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CustomersController } from './customers.controller';
import { UsersModule } from '../users/users.module';
import { AddressesModule } from '../addresses/addresses.module';

@Module({
  imports: [PrismaModule, UsersModule, AddressesModule],
  exports: [CustomersService],
  providers: [{ provide: CustomersService, useClass: CustomersPrismaService }],
  controllers: [CustomersController],
})
export class CustomersModule {}
