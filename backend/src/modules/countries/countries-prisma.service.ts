import { CountriesService } from './countries.service';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { plainToInstance } from 'class-transformer';
import { CountryResponseDto } from './dto/country-response.dto';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

@Injectable()
export class CountriesPrismaService implements CountriesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCountry(
    countryDto: CreateCountryDto,
  ): Promise<CountryResponseDto> {
    const country = await this.prisma.country.create({ data: countryDto });
    if (!country.id) throw new CreationFailedException('Country not created');

    return plainToInstance(CountryResponseDto, country);
  }
  async findAllCountries(): Promise<CountryResponseDto[]> {
    return plainToInstance(
      CountryResponseDto,
      await this.prisma.country.findMany(),
    );
  }
  async findCountry(id: string): Promise<CountryResponseDto> {
    const country = await this.prisma.country.findUnique({ where: { id } });
    if (!country) throw new ResourceNotFoundException('Country not found');

    return plainToInstance(CountryResponseDto, country);
  }
  async findCountryByName(name: string): Promise<CountryResponseDto> {
    const country = await this.prisma.country.findUnique({ where: { name } });
    if (!country) throw new ResourceNotFoundException('Country not found');

    return plainToInstance(CountryResponseDto, country);
  }
}
