import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';

export abstract class UsersService {
  abstract findAllUsers(): Promise<UserResponseDto[]>;
  abstract findUser(id: string): Promise<UserResponseDto>;
  abstract createUser(userDto: CreateUserDto): Promise<UserResponseDto>;
  abstract disableUser(id: string): Promise<UserResponseDto>;
  abstract updateUser(
    id: string,
    userDto: UpdateUserDto,
  ): Promise<UserResponseDto>;
  abstract findUserByEmail(email: string): Promise<UserResponseDto>;
  abstract findUserByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserResponseDto>;
}
