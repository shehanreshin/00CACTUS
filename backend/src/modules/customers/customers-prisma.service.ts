import { CustomersService } from './customers.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UsersService } from '../users/users.service';
import { AddressesService } from '../addresses/addresses.service';
import { plainToInstance } from 'class-transformer';
import { CustomerResponseDto } from './dto/customer-response.dto';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

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

    const customer = await this.prisma.customer.create({
      data: { userId: user.id, addressId: address.id },
      ...this.allRelationsPrismaArgs,
    });
    if (!customer.id) throw new CreationFailedException('Customer not created');

    return plainToInstance(CustomerResponseDto, customer);
  }

  async findAllCustomers(): Promise<CustomerResponseDto[]> {
    return plainToInstance(
      CustomerResponseDto,
      await this.prisma.customer.findMany({ ...this.allRelationsPrismaArgs }),
    );
  }

  async findCustomer(id: string): Promise<CustomerResponseDto> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      ...this.allRelationsPrismaArgs,
    });
    if (!customer) throw new ResourceNotFoundException('Customer not found');

    return plainToInstance(CustomerResponseDto, customer);
  }

  async findCustomerByUserId(userId: string): Promise<CustomerResponseDto> {
    const customer = await this.prisma.customer.findUnique({
      where: { userId },
      ...this.allRelationsPrismaArgs,
    });
    if (!customer) throw new ResourceNotFoundException('Customer not found');

    return plainToInstance(CustomerResponseDto, customer);
  }
}
