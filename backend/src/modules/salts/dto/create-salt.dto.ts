import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaltDto {
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'thisisasalt' })
  salt: string;
}
