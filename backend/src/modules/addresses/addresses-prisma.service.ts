import { AddressesService } from './addresses.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AddressesPrismaService implements AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  findAllAddresses() {
    return this.prisma.address.findMany();
  }
  findAddress(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  createAddress(createAddressDto: any) {
    return this.prisma.address.create(createAddressDto);
  }
}
