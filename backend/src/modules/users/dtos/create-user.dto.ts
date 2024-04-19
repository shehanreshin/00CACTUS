import { USER_ROLE, UserRole } from '../constants/user-role.const';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEnum, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsEnum(USER_ROLE)
  @IsOptional()
  @ApiProperty({ enum: USER_ROLE })
  role: UserRole;
}
