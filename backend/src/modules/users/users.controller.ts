import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HasherService } from '../hasher/hasher.service';
import { SaltsService } from '../salts/salts.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly hasher: HasherService,
    private readonly saltsService: SaltsService,
  ) {}
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);
    const savedUser = this.usersService.createUser(userDto);

    if (savedUser.id) {
      this.saltsService.createSalt({
        userId: savedUser.id,
        salt: salt,
      });
    }

    return savedUser;
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.usersService.findUser(id);
  }
}
