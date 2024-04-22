import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesPrismaService } from './addresses-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CountriesModule } from '../countries/countries.module';

@Module({
  imports: [PrismaModule, CountriesModule],
  exports: [AddressesService],
  providers: [{ provide: AddressesService, useClass: AddressesPrismaService }],
})
export class AddressesModule {}
