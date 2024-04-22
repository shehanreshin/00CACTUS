import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Post()
  async createCustomer(@Body() customerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(customerDto);
  }

  @Get()
  async findAllCustomers() {
    return this.customersService.findAllCustomers();
  }
}
