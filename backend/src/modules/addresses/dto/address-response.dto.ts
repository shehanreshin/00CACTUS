import { CountryResponseDto } from '../../countries/dto/country-response.dto';
import {
  Exclude,
  Expose,
  plainToInstance,
  Transform,
  Type,
} from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class AddressResponseDto {
  @Expose()
  id: string;

  @Expose()
  line1: string;

  @Expose()
  line2: string;

  @Expose()
  city: string;

  @Expose()
  region: string;

  @Expose()
  zipCode: string;

  @Exclude()
  countryId: string;

  @Expose()
  @Type(() => CountryResponseDto)
  @ValidateNested()
  @Transform((c) => plainToInstance(CountryResponseDto, c.obj.country))
  country: CountryResponseDto;

  @Expose()
  updatedAt: Date;
}
