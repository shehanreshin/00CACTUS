import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { HasherService } from '../hasher/hasher.service';
import { SaltsService } from '../salts/salts.service';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dtos/user-response.dto';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { OperationFailedException } from '../../common/exceptions/operation-failed.exception';

@Injectable()
export class UsersPrismaService implements UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hasher: HasherService,
    private readonly saltsService: SaltsService,
  ) {}

  async findUserByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new ResourceNotFoundException('User not found');

    return plainToInstance(UserResponseDto, user);
  }
  async findAllUsers(): Promise<UserResponseDto[]> {
    return plainToInstance(UserResponseDto, await this.prisma.user.findMany());
  }

  async findUser(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new ResourceNotFoundException('User not found');

    return plainToInstance(UserResponseDto, user);
  }

  async createUser(userDto: CreateUserDto): Promise<UserResponseDto> {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);

    const savedUser = await this.prisma.user.create({ data: userDto });
    if (!savedUser.id) throw new CreationFailedException('User not created');

    const savedSalt = await this.saltsService.createSalt({
      userId: savedUser.id,
      salt: salt,
    });
    if (!savedSalt.id) throw new CreationFailedException('Salt not created');

    return plainToInstance(UserResponseDto, savedUser);
  }

  async disableUser(id: string): Promise<UserResponseDto> {
    await this.findUser(id);

    const user = await this.prisma.user.update({
      where: { id },
      data: { status: 'DISABLED' },
    });
    if (!user) throw new OperationFailedException('User not disabled');

    return plainToInstance(UserResponseDto, user);
  }

  async updateUser(
    id: string,
    userDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    await this.findUser(id);

    const user = await this.prisma.user.update({
      where: { id },
      data: userDto,
    });
    if (!user) throw new OperationFailedException('User not updated');

    return plainToInstance(UserResponseDto, user);
  }
}
