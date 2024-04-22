import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  code: string;
}
