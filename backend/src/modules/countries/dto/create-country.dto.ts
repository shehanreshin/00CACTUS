import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Sri Lanka' })
  name: string;

  @IsNumberString()
  @ApiProperty({ example: '+94' })
  code: string;
}
