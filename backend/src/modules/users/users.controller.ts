import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HasherService } from '../hasher/hasher.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly hasher: HasherService,
  ) {}
  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);

    return this.usersService.createUser(userDto);
  }

  @Get()
  async findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id') id: string) {
    return this.usersService.findUser(id);
  }
}
