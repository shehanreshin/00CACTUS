import { CreateAddressDto } from '../../addresses/dto/create-address.dto';
import { CreateUserDto } from '../../users/dtos/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ type: CreateUserDto })
  @Type(() => CreateUserDto)
  @ValidateNested()
  user: CreateUserDto;

  @ApiProperty({ type: CreateAddressDto })
  @Type(() => CreateAddressDto)
  @ValidateNested()
  address: CreateAddressDto;
}
