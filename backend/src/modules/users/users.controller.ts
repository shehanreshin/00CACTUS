import { Body, Controller, Post } from '@nestjs/common';
import { prisma } from 'src/database/prisma/client';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('api/v1/users')
export class UsersController {
  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const user = await prisma.user.create({
      data: userDto,
    });
    return user;
  }
}
