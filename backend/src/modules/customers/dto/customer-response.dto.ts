import { Exclude, Expose, Type } from 'class-transformer';
import { IsDate, IsUUID, ValidateNested } from 'class-validator';
import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { AddressResponseDto } from '../../addresses/dto/address-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty()
  id: string;

  @Exclude()
  @IsUUID()
  @ApiProperty()
  userId: string;

  @Expose()
  @Type(() => UserResponseDto)
  @ValidateNested()
  @ApiProperty()
  user: UserResponseDto;

  @Exclude()
  @IsUUID()
  @ApiProperty()
  addressId: string;

  @Expose()
  @Type(() => AddressResponseDto)
  @ValidateNested()
  @ApiProperty()
  address: AddressResponseDto;

  @Expose()
  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
