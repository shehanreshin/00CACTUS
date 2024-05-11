import { Body, Controller, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CountryResponseDto } from './dto/country-response.dto';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @ApiCreatedResponse({
    description: 'The country details',
    type: CountryResponseDto,
  })
  @Post()
  createCountry(@Body() countryDto: CreateCountryDto) {
    return this.countriesService.createCountry(countryDto);
  }
}
