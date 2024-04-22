import { CustomersService } from './customers.service';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersPrismaService implements CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  createCustomer(userId: string, addressId: string) {
    return this.prisma.customer.create({
      data: { userId: userId, addressId: addressId },
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
