import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customers.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomerResponseDto } from './dto/customer-response.dto';
import { OperationFailedException } from '../../common/exceptions/operation-failed.exception';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiCreatedResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Post()
  createCustomer(@Body() customerDto: CreateCustomerDto) {
    if (customerDto.user.role && customerDto.user.role !== 'CUSTOMER') {
      throw new OperationFailedException(
        'Admin or Staff cannot be created. Only Customer can be created.',
      );
    }
    return this.customersService.createCustomer(customerDto);
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
    isArray: true,
  })
  @Get()
  findAllCustomers() {
    return this.customersService.findAllCustomers();
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Get(':id')
  findCustomer(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.customersService.findCustomer(id);
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Get('users/:id')
  findCustomerByUserId(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.customersService.findCustomerByUserId(id);
  }
}
