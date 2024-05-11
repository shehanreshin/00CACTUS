import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginCredentialsDto {
  @IsEmail()
  @ApiProperty({ example: 'mscott@dundermifflin.org' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'scottstots' })
  password: string;
}
