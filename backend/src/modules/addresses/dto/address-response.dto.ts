import { CountryResponseDto } from '../../countries/dto/country-response.dto';
import {
  Exclude,
  Expose,
  plainToInstance,
  Transform,
  Type,
} from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class AddressResponseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  line1: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  line2: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  city: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  region: string;

  @Expose()
  @IsNumberString()
  zipCode: string;

  @Exclude()
  @IsUUID()
  countryId: string;

  @Expose()
  @Type(() => CountryResponseDto)
  @ValidateNested()
  country: CountryResponseDto;

  @Expose()
  @IsDate()
  updatedAt: Date;
}
