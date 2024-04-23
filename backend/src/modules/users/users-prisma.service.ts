import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { HasherService } from '../hasher/hasher.service';
import { SaltsService } from '../salts/salts.service';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dtos/user-response.dto';

@Injectable()
export class UsersPrismaService implements UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hasher: HasherService,
    private readonly saltsService: SaltsService,
  ) {}

  async findUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return plainToInstance(UserResponseDto, user);
  }
  async findAllUsers() {
    return plainToInstance(UserResponseDto, await this.prisma.user.findMany());
  }

  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return plainToInstance(UserResponseDto, user);
  }

  async createUser(userDto: CreateUserDto) {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);
    const savedUser = await this.prisma.user.create({ data: userDto });

    if (!savedUser.id) {
      throw new HttpException(
        'User not saved',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const savedSalt = await this.saltsService.createSalt({
      userId: savedUser.id,
      salt: salt,
    });

    if (!savedSalt.id) {
      throw new HttpException(
        'Salt not saved',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return plainToInstance(UserResponseDto, savedUser);
  }

  async disableUser(id: string) {
    await this.findUser(id);
    const user = await this.prisma.user.update({
      where: { id },
      data: { status: 'DISABLED' },
    });

    if (!user) {
      throw new HttpException(
        'User not disabled',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return plainToInstance(UserResponseDto, user);
  }

  async updateUser(id: string, userDto: UpdateUserDto) {
    await this.findUser(id);
    const user = await this.prisma.user.update({
      where: { id },
      data: userDto,
    });

    if (!user) {
      throw new HttpException(
        'User not updated',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return plainToInstance(UserResponseDto, user);
  }
}
