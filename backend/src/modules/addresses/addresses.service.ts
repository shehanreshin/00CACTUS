export abstract class AddressesService {
  abstract findAllAddresses();
  abstract findAddress(id: string);
  abstract createAddress(createAddressDto);
}
