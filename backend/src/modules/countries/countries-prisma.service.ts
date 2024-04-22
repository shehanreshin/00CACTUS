import { CountriesService } from './countries.service';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { plainToInstance } from 'class-transformer';
import { CountryResponseDto } from './dto/country-response.dto';

@Injectable()
export class CountriesPrismaService implements CountriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCountry(countryDto: CreateCountryDto) {
    return plainToInstance(
      CountryResponseDto,
      await this.prisma.country.create({ data: countryDto }),
    );
  }
  findAllCountries() {
    return this.prisma.country.findMany();
  }
  findCountry(id: string) {
    return this.prisma.country.findUnique({ where: { id } });
  }
  findCountryByName(name: string) {
    return this.prisma.country.findUnique({ where: { name } });
  }
}
