import { CustomersService } from './customers.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UsersService } from '../users/users.service';
import { AddressesService } from '../addresses/addresses.service';
import { plainToInstance } from 'class-transformer';
import { CustomerResponseDto } from './dto/customer-response.dto';

@Injectable()
export class CustomersPrismaService implements CustomersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly addressesService: AddressesService,
  ) {}

  async createCustomer(customerDto: CreateCustomerDto) {
    const user = await this.usersService.createUser(customerDto.user);
    const address = await this.addressesService.createAddress(
      customerDto.address,
    );

    const customer = this.prisma.customer.create({
      data: { user: { connect: user }, address: { connect: address } },
      include: {
        user: true,
        address: true,
      },
    });

    return plainToInstance(CustomerResponseDto, customer);
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
