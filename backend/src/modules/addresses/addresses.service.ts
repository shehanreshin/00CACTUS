import { CreateAddressDto } from './dto/create-address.dto';
import { AddressResponseDto } from './dto/address-response.dto';

export abstract class AddressesService {
  abstract findAddress(id: string): Promise<AddressResponseDto>;
  abstract createAddress(
    addressDto: CreateAddressDto,
  ): Promise<AddressResponseDto>;
}
