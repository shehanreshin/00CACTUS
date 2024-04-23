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
  private readonly allRelationsPrismaArgs = {
    include: {
      user: true,
      address: {
        include: {
          country: true,
        },
      },
    },
  };

  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly addressesService: AddressesService,
  ) {}

  async createCustomer(
    customerDto: CreateCustomerDto,
  ): Promise<CustomerResponseDto> {
    const user = await this.usersService.createUser(customerDto.user);
    const address = await this.addressesService.createAddress(
      customerDto.address,
    );

    return plainToInstance(
      CustomerResponseDto,
      await this.prisma.customer.create({
        data: { userId: user.id, addressId: address.id },
        ...this.allRelationsPrismaArgs,
      }),
    );
  }

  async findAllCustomers(): Promise<CustomerResponseDto[]> {
    return plainToInstance(
      CustomerResponseDto,
      await this.prisma.customer.findMany({ ...this.allRelationsPrismaArgs }),
    );
  }

  async findCustomer(id: string): Promise<CustomerResponseDto> {
    return plainToInstance(
      CustomerResponseDto,
      await this.prisma.customer.findUnique({
        where: { id },
        ...this.allRelationsPrismaArgs,
      }),
    );
  }

  async findCustomerByUserId(userId: string): Promise<CustomerResponseDto> {
    return plainToInstance(
      CustomerResponseDto,
      await this.prisma.customer.findUnique({
        where: { userId },
        ...this.allRelationsPrismaArgs,
      }),
    );
  }
}
