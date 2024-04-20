import { CreateSaltDto } from './dto/create-salt.dto';

export abstract class SaltsService {
  abstract findSaltByUserId(userId: string);
  abstract createSalt(createSaltDto: CreateSaltDto);
}
