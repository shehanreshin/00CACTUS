export abstract class CountriesService {
  abstract findAllCountries();
  abstract findCountry(id: string);
  abstract findCountryByName(name: string);
}
