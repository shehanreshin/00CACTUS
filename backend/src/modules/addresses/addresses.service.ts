export abstract class AddressesService {
  abstract findAllAddresses();
  abstract findAddress(id: string);
  abstract findAddressByCustomerId(customerId: string);
  abstract createAddress(createAddressDto);
}
