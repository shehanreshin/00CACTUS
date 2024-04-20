import { USER_ROLE, UserRole } from '../constants/user-role.const';
import { USER_STATUS, UserStatus } from '../constants/user-status.const';
import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsEnum(USER_ROLE)
  @ApiProperty({ enum: USER_ROLE })
  role: UserRole;

  @IsEnum(USER_STATUS)
  @ApiProperty({ enum: USER_STATUS })
  status: UserStatus;
}
