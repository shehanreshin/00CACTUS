import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesPrismaService } from './countries-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [CountriesService],
  providers: [{ provide: CountriesService, useClass: CountriesPrismaService }],
})
export class CountriesModule {}
