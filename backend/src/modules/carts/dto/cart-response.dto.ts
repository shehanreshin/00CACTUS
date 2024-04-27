import { IsUUID, ValidateNested } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CartItemResponseDto } from '../../cart-item/dto/cart-item-response.dto';
import { CustomerResponseDto } from '../../customers/dto/customer-response.dto';

export class CartResponseDto {
  @IsUUID()
  @Expose()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Type(() => CustomerResponseDto)
  @ValidateNested()
  @Exclude()
  customer: CustomerResponseDto;

  @IsUUID()
  @Exclude()
  customerId: string;

  @ValidateNested()
  @Type(() => CartItemResponseDto)
  @Expose({ name: 'CartItem' })
  @ApiProperty({ isArray: true, type: CartItemResponseDto })
  items: CartItemResponseDto[];
}
