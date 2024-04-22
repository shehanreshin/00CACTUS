import { Exclude, Expose, Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { UserResponseDto } from '../../users/dtos/user-response.dto';

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
  address: any;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
