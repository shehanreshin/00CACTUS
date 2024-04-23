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
import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @Expose()
  @IsUUID()
  @ApiProperty({ example: '2c03fe0a-afe5-4b13-8bf1-6a7787017515' })
  id: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Michael' })
  firstName: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Scott' })
  lastName: string;

  @Expose()
  @IsEmail()
  @ApiProperty({ example: 'mscott@dundermifflin.org' })
  email: string;

  @Exclude()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'scottstots' })
  password: string;

  @Expose()
  @IsEnum(USER_ROLE)
  @ApiProperty({ enum: USER_ROLE })
  role: UserRole;

  @Expose()
  @IsEnum(USER_STATUS)
  @ApiProperty({ enum: USER_STATUS })
  status: UserStatus;

  @Expose()
  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
