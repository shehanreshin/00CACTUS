import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  line1: string;

  @IsString()
  @IsNotEmpty()
  line2: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  region: string;

  @IsNumberString()
  zipCode: string;

  country: CountryDto;
}
