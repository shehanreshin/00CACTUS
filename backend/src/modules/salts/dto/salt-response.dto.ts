import { UserResponseDto } from '../../users/dtos/user-response.dto';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

export class SaltResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Expose()
  @Type(() => UserResponseDto)
  @ValidateNested()
  @ApiProperty({type: UserResponseDto})
  user: UserResponseDto;

  @Exclude()
  @IsUUID()
  userId: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'thisisasalt' })
  salt: string;
}
