import { CreateAddressDto } from './dto/create-address.dto';

export abstract class AddressesService {
  abstract findAddress(id: string);
  abstract createAddress(addressDto: CreateAddressDto);
}
