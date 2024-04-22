import { CreateCountryDto } from './dto/create-country.dto';

export abstract class CountriesService {
  abstract findAllCountries();
  abstract findCountry(id: string);
  abstract findCountryByName(name: string);
  abstract createCountry(countryDto: CreateCountryDto);
}
