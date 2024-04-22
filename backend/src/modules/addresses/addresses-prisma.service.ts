import { AddressesService } from './addresses.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { plainToInstance } from 'class-transformer';
import { AddressResponseDto } from './dto/address-response.dto';

@Injectable()
export class AddressesPrismaService implements AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  findAddress(id: string) {
    return this.prisma.address.findUnique({
      where: { id },
      include: { country: true },
    });
  }

  async createAddress(addressDto: CreateAddressDto) {
    const address = await this.prisma.address.create({
      data: addressDto,
      include: {
        country: true,
      },
    });

    return plainToInstance(AddressResponseDto, address);
  }
}
