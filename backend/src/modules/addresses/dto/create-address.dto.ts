import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '221B' })
  line1: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Baker's street" })
  line2: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'London' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Greater London' })
  region: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'EC1A 1AL' })
  zipCode: string;

  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  countryId: string;
}
