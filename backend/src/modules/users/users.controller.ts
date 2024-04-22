import {
  Body,
  Controller,
  Get,
  Injectable,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
@Injectable()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
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
