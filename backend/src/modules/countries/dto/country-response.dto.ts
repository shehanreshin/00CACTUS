import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';

export class CountryResponseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNumberString()
  code: string;
}
