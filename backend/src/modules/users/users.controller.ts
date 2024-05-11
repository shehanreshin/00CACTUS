import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dtos/user-response.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    description: 'The user details',
    type: UserResponseDto,
    isArray: true,
  })
  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @ApiOkResponse({
    description: 'The user details',
    type: UserResponseDto,
  })
  @Get(':id')
  findUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.findUser(id);
  }

  @ApiOkResponse({
    description: 'The user details',
    type: UserResponseDto,
  })
  @Patch(':id')
  updateUser(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() userDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, userDto);
  }

  @ApiOkResponse({
    description: 'The user details',
    type: UserResponseDto,
  })
  @Patch(':id/disable')
  disableUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.disableUser(id);
  }
}
