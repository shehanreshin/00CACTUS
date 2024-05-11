import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerResponseDto } from './dto/customer-response.dto';

export abstract class CustomersService {
  abstract findAllCustomers(): Promise<CustomerResponseDto[]>;
  abstract findCustomer(id: string): Promise<CustomerResponseDto>;
  abstract findCustomerByUserId(userId: string): Promise<CustomerResponseDto>;
  abstract createCustomer(
    customerDto: CreateCustomerDto,
  ): Promise<CustomerResponseDto>;
}
