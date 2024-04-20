import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersPrismaService implements UsersService {
  constructor(private readonly prisma: PrismaService) {}
  findAllUsers() {
    return this.prisma.user.findMany();
  }

  findUser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  deleteUser(id: string) {
    throw new Error('Method not implemented.');
  }

  updateUser(id: string) {
    throw new Error('Method not implemented.');
  }
}
