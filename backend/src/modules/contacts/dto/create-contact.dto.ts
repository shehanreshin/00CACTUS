import { CountryResponseDto } from '../../countries/dto/country-response.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumberString } from 'class-validator';

export class CreateContactDto {
  @Type(() => CountryResponseDto)
  @ApiProperty()
  country: CountryResponseDto;

  @IsNumberString()
  @ApiProperty({ example: '761237431' })
  phoneNumber: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isDefault: boolean;
}