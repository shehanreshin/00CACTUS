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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CustomerResponseDto } from "./dto/customer-response.dto";

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiCreatedResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Post()
  async createCustomer(@Body() customerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(customerDto);
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
    isArray: true,
  })
  @Get()
  async findAllCustomers() {
    return this.customersService.findAllCustomers();
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Get(':id')
  async findCustomer(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.customersService.findCustomer(id);
  }

  @ApiOkResponse({
    description: 'The customer details',
    type: CustomerResponseDto,
  })
  @Get('users/:id')
  async findCustomerByUserId(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.customersService.findCustomerByUserId(id);
  }
}
