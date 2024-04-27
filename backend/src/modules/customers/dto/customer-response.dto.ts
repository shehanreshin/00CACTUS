import { Exclude, Expose, Type } from 'class-transformer';
import { IsDate, IsUUID, ValidateNested } from 'class-validator';
import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { AddressResponseDto } from '../../addresses/dto/address-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Exclude()
  @IsUUID()
  userId: string;

  @Expose()
  @Type(() => UserResponseDto)
  @ValidateNested()
  @ApiProperty({ type: UserResponseDto })
  user: UserResponseDto;

  @Exclude()
  @IsUUID()
  addressId: string;

  @Expose()
  @Type(() => AddressResponseDto)
  @ValidateNested()
  @ApiProperty({ type: AddressResponseDto })
  address: AddressResponseDto;

  @Exclude()
  @IsDate()
  createdAt: Date;

  @Exclude()
  @IsDate()
  updatedAt: Date;
}
