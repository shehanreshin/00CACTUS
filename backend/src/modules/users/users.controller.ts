import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { HasherService } from '../hasher/hasher.service';
import { SaltsService } from '../salts/salts.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly hasher: HasherService,
    private readonly saltsService: SaltsService,
  ) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const salt = this.hasher.genSalt();
    userDto.password = this.hasher.hash(userDto.password, salt);
    const savedUser = await this.usersService.createUser(userDto);

    if (savedUser.id) {
      await this.saltsService.createSalt({
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

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
    return this.usersService.updateUser(id, userDto);
  }

  @Patch(':id/disable')
  disableUser(@Param('id') id: string) {
    return this.usersService.disableUser(id);
  }
}
