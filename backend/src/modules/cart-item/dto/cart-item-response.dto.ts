import { CartResponseDto } from '../../carts/dto/cart-response.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsPositive,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CartItemResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Exclude()
  @Type(() => CartResponseDto)
  @ValidateNested()
  cart: CartResponseDto;

  @Exclude()
  @IsUUID()
  cartId: string;

  @Expose()
  @ApiProperty()
  productItem: string;

  @Exclude()
  @IsUUID()
  productItemId: string;

  @Expose()
  @IsNumber()
  @IsPositive()
  @ApiProperty({ example: 3 })
  qty: number;

  @Exclude()
  @IsDate()
  createdAt: Date;

  @Exclude()
  @IsDate()
  updatedAt: Date;
}
