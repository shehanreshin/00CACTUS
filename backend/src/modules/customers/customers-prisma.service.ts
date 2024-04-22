import { CustomersService } from './customers.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { CreateAddressDto } from '../addresses/dto/create-address.dto';

@Injectable()
export class CustomersPrismaService implements CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  createCustomer(userDto: CreateUserDto, addressDto: CreateAddressDto) {
    return this.prisma.customer.create({
      data: { user: { create: userDto }, address: { create: addressDto } },
    });
  }

  findAllCustomers() {
    return this.prisma.customer.findMany();
  }
  findCustomer(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }
  findCustomerByUserId(userId: string) {
    return this.prisma.customer.findUnique({ where: { userId } });
  }
}
