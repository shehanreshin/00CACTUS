import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesPrismaService } from './addresses-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [AddressesService],
  providers: [{ provide: AddressesService, useClass: AddressesPrismaService }],
})
export class AddressesModule {}
