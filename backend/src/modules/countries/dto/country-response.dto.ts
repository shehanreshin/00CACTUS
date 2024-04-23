import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumberString, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CountryResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Sri Lanka' })
  name: string;

  @Expose()
  @IsNumberString()
  @ApiProperty({ example: '+94' })
  code: string;
}
