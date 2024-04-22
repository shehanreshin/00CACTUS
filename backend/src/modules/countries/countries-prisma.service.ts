import { CountriesService } from './countries.service';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesPrismaService implements CountriesService {
  constructor(private readonly prisma: PrismaService) {}
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
