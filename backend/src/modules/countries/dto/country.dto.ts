import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CountryDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  code: string;
}
