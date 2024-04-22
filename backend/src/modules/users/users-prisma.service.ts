import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { HasherService } from '../hasher/hasher.service';
import { SaltsService } from '../salts/salts.service';

@Injectable()
export class UsersPrismaService implements UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hasher: HasherService,
    private readonly saltsService: SaltsService,
  ) {}

  findUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  findAllUsers() {
    return this.prisma.user.findMany();
  }

  findUser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(userDto: CreateUserDto) {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);
    const savedUser = await this.prisma.user.create({ data: userDto });

    if (savedUser.id) {
      await this.saltsService.createSalt({
        userId: savedUser.id,
        salt: salt,
      });
    }

    return savedUser;
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
