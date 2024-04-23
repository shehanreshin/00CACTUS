import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { CountryResponseDto } from '../../countries/dto/country-response.dto';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContactResponseDto {
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  @Expose()
  id: string;

  @Type(() => UserResponseDto)
  @ValidateNested()
  @ApiProperty()
  @Expose()
  user: UserResponseDto;

  @IsUUID()
  @Exclude()
  userId: string;

  @Type(() => CountryResponseDto)
  @ValidateNested()
  @ApiProperty()
  @Expose()
  country: CountryResponseDto;

  @IsUUID()
  @Exclude()
  countryId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({example: '761237431'})
  @Expose()
  phoneNumber: string;

  @IsBoolean()
  @ApiProperty({example: true})
  @Expose()
  isDefault: boolean;

  @IsDate()
  @Exclude()
  updatedAt: Date;
}
