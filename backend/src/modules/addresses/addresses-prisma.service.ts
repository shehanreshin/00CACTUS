import { AddressesService } from './addresses.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class AddressesPrismaService implements AddressesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly countriesService: CountriesService,
  ) {}
  findAllAddresses() {
    return this.prisma.address.findMany();
  }
  findAddress(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  createAddress(addressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: { ...addressDto, countryId: addressDto.countryId },
    });
  }
}
