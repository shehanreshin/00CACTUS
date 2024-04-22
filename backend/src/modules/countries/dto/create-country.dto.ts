import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CreateCountryDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  code: string;
}
