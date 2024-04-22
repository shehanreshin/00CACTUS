import { CreateUserDto } from '../users/dtos/create-user.dto';
import { CreateAddressDto } from '../addresses/dto/create-address.dto';

export abstract class CustomersService {
  abstract findAllCustomers();
  abstract findCustomer(id: string);
  abstract findCustomerByUserId(userId: string);
  abstract createCustomer(userDto: CreateUserDto, addressDto: CreateAddressDto);
}
