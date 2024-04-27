import { IsUUID, ValidateNested } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CartResponseDto {
  @IsUUID()
  @Expose()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @ValidateNested()
  @Expose({ name: 'CartItem' })
  @ApiProperty({ isArray: true })
  items: string[];
}
