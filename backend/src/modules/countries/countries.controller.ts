import { Body, Controller, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  createCountry(@Body() countryDto: CreateCountryDto) {
    return this.countriesService.createCountry(countryDto);
  }
}
