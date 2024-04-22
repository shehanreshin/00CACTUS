import { Exclude, Expose, Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { AddressResponseDto } from '../../addresses/dto/address-response.dto';

export class CustomerResponseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Exclude()
  @IsUUID()
  userId: string;

  @Expose()
  @Type(() => UserResponseDto)
  @ValidateNested()
  user: UserResponseDto;

  @Exclude()
  @IsUUID()
  addressId: string;

  @Expose()
  @Type(() => AddressResponseDto)
  @ValidateNested()
  address: AddressResponseDto;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
