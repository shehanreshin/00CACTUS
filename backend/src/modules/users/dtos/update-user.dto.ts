import { USER_ROLE, UserRole } from '../constants/user-role.const';
import { USER_STATUS, UserStatus } from '../constants/user-status.const';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Michael',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Scott',
  })
  lastName: string;

  @IsEnum(USER_ROLE)
  @IsOptional()
  @ApiPropertyOptional({
    enum: USER_ROLE,
  })
  role: UserRole;

  @IsEnum(USER_STATUS)
  @IsOptional()
  @ApiPropertyOptional({
    enum: USER_STATUS,
  })
  status: UserStatus;
}
