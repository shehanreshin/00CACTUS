import { CreateSaltDto } from './dto/create-salt.dto';
import { SaltsService } from './salts.service';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SaltsPrismaService implements SaltsService {
  constructor(private readonly prisma: PrismaService) {}
  async findSaltByUserId(userId: string): Promise<string> {
    return (
      await this.prisma.salt.findUnique({
        where: { userId },
      })
    ).salt;
  }
  createSalt(createSaltDto: CreateSaltDto) {
    return this.prisma.salt.create({ data: createSaltDto });
  }
}
