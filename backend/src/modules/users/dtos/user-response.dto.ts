import { USER_ROLE, UserRole } from '../constants/user-role.const';
import { USER_STATUS, UserStatus } from '../constants/user-status.const';
import { Exclude, Expose } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UserResponseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Expose()
  @IsEmail()
  email: string;

  @Exclude()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Expose()
  @IsEnum(USER_ROLE)
  role: UserRole;

  @Expose()
  @IsEnum(USER_STATUS)
  status: UserStatus;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsDate()
  updatedAt: Date;
}
