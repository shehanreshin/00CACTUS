import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesPrismaService } from './countries-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CountriesController } from './countries.controller';

@Module({
  imports: [PrismaModule],
  exports: [CountriesService],
  providers: [{ provide: CountriesService, useClass: CountriesPrismaService }],
  controllers: [CountriesController],
})
export class CountriesModule {}
