import { USER_ROLE, UserRole } from '../constants/user-role.const';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Michael',
    required: true,
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Scott',
  })
  lastName: string;

  @IsEmail()
  @ApiProperty({
    example: 'mscott@dundermifflin.org',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'scottstots',
  })
  password: string;

  @IsEnum(USER_ROLE)
  @IsOptional()
  @ApiPropertyOptional({
    enum: USER_ROLE,
  })
  role: UserRole;
}
