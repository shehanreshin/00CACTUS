import { CountryResponseDto } from '../../countries/dto/country-response.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddressResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '221B' })
  line1: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Baker's street" })
  line2: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'London' })
  city: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Greater London' })
  region: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'EC1A 1AL' })
  zipCode: string;

  @Exclude()
  @IsUUID()
  countryId: string;

  @Expose()
  @Type(() => CountryResponseDto)
  @ValidateNested()
  @ApiProperty({type: CountryResponseDto})
  country: CountryResponseDto;

  @Exclude()
  @IsDate()
  updatedAt: Date;
}
