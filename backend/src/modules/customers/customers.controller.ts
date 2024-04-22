import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Post()
  createCustomer(@Body() customerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(
      customerDto.user,
      customerDto.address,
    );
  }
}
