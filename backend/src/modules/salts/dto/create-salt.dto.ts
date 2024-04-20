import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSaltDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  salt: string;
}
