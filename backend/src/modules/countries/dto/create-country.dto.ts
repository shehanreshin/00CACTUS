import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  code: string;
}
