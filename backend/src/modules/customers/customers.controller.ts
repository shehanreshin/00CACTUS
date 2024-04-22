import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';
import { AddressesService } from '../addresses/addresses.service';
import { UsersService } from '../users/users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly addressesService: AddressesService,
    private readonly usersService: UsersService,
  ) {}
  @Post()
  async createCustomer(@Body() customerDto: CreateCustomerDto) {
    const user = await this.usersService.createUser(customerDto.user);
    const address = await this.addressesService.createAddress(
      customerDto.address,
    );
    return this.customersService.createCustomer(user.id, address.id);
  }
}
