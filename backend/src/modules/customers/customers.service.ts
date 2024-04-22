import { CreateCustomerDto } from './dto/create-customer.dto';

export abstract class CustomersService {
  abstract findAllCustomers();
  abstract findCustomer(id: string);
  abstract findCustomerByUserId(userId: string);
  abstract createCustomer(customerDto: CreateCustomerDto);
}
