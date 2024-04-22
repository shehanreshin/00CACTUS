import { Exclude, Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';

export class CustomerResponseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Exclude()
  @IsUUID()
  userId: string;

  @Expose()
  user: any;

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
