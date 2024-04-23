import { CreateSaltDto } from './dto/create-salt.dto';

export abstract class SaltsService {
  abstract findSaltByUserId(userId: string): Promise<string>;
  abstract createSalt(createSaltDto: CreateSaltDto);
}
