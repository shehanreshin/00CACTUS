import { CustomerResponseDto } from '../../customers/dto/customer-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class CustomerJwtDecodedSchema extends CustomerResponseDto {
  @ApiProperty({ example: '1714382756' })
  @IsNumberString()
  iat: number;
}
