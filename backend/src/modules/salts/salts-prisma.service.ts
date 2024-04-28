import { CreateSaltDto } from './dto/create-salt.dto';
import { SaltsService } from './salts.service';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { plainToInstance } from 'class-transformer';
import { SaltResponseDto } from './dto/salt-response.dto';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

@Injectable()
export class SaltsPrismaService implements SaltsService {
  constructor(private readonly prisma: PrismaService) {}
  async findSaltByUserId(userId: string): Promise<string> {
    const salt = await this.prisma.salt.findUnique({
      where: { userId },
    });
    if (!salt) throw new ResourceNotFoundException('Salt not found');

    return salt.salt;
  }
  async createSalt(createSaltDto: CreateSaltDto): Promise<SaltResponseDto> {
    const salt = await this.prisma.salt.create({ data: createSaltDto });
    if (!salt.id) throw new CreationFailedException('Salt not created');

    return plainToInstance(SaltResponseDto, salt);
  }
}
