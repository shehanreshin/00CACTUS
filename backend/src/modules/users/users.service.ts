import { CreateUserDto } from './dtos/create-user.dto';

export abstract class UsersService {
  abstract findAllUsers();
  abstract findUser(id: string);
  abstract createUser(createUserDto: CreateUserDto);
  abstract deleteUser(id: string);
  abstract updateUser(id: string);
}
