import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

export abstract class UsersService {
  abstract findAllUsers();
  abstract findUser(id: string);
  abstract createUser(userDto: CreateUserDto);
  abstract permanentlyDisableUser(id: string);
  abstract updateUser(id: string, userDto: UpdateUserDto);
  abstract findUserByEmail(email: string);
}
