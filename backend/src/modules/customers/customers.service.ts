export abstract class CustomersService {
  abstract findAllCustomers();
  abstract findCustomer(id: string);
  abstract findCustomerByUserId(userId: string);
  abstract createCustomer(userId: string, addressId: string);
}
