import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersPrismaService implements UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  findAllUsers() {
    return this.prisma.user.findMany();
  }

  findUser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(userDto: CreateUserDto) {
    console.log(userDto);
    return this.prisma.user.create({ data: userDto });
  }

  disableUser(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: { status: 'DISABLED' },
    });
  }

  async updateUser(id: string, userDto: UpdateUserDto) {
    const user = await this.findUser(id);
    if (!user) throw new HttpException('User not found!', 404);
    return this.prisma.user.update({ where: { id }, data: userDto });
  }
}
