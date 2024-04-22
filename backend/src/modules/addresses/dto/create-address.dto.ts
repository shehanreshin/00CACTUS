import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  line1: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  line2: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  region: string;

  @IsNumberString()
  @ApiProperty()
  zipCode: string;

  @IsUUID()
  @ApiProperty()
  countryId: string;
}