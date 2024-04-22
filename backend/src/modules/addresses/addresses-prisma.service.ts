import { AddressesService } from './addresses.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressesPrismaService implements AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  findAddress(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  createAddress(addressDto: CreateAddressDto) {
    return this.prisma.address.create({
      data: addressDto,
    });
  }
}
