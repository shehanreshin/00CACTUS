import { CreateCountryDto } from './dto/create-country.dto';
import { CountryResponseDto } from './dto/country-response.dto';

export abstract class CountriesService {
  abstract findAllCountries(): Promise<CountryResponseDto[]>;
  abstract findCountry(id: string): Promise<CountryResponseDto>;
  abstract findCountryByName(name: string): Promise<CountryResponseDto>;
  abstract createCountry(
    countryDto: CreateCountryDto,
  ): Promise<CountryResponseDto>;
}
