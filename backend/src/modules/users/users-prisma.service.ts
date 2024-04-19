import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { prisma } from '../../database/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersPrismaService implements UsersService {
  findAllUsers() {
    throw new Error('Method not implemented.');
  }

  findUser(id: string) {
    throw new Error('Method not implemented.');
  }

  createUser(createUserDto: CreateUserDto) {
    return prisma.user.create({ data: createUserDto });
  }

  deleteUser(id: string) {
    throw new Error('Method not implemented.');
  }

  updateUser(id: string) {
    throw new Error('Method not implemented.');
  }
}
