import { AddressesService } from './addresses.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { plainToInstance } from 'class-transformer';
import { AddressResponseDto } from './dto/address-response.dto';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

@Injectable()
export class AddressesPrismaService implements AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  async findAddress(id: string): Promise<AddressResponseDto> {
    const address = await this.prisma.address.findUnique({
      where: { id },
      include: { country: true },
    });
    if (!address) throw new ResourceNotFoundException('Address not found');

    return plainToInstance(AddressResponseDto, address);
  }

  async createAddress(
    addressDto: CreateAddressDto,
  ): Promise<AddressResponseDto> {
    const address = await this.prisma.address.create({
      data: addressDto,
      include: {
        country: true,
      },
    });
    if (!address.id) throw new CreationFailedException('Address not created');

    return plainToInstance(AddressResponseDto, address);
  }
}
