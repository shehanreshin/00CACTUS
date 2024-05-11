import { CreateSaltDto } from './dto/create-salt.dto';
import { SaltResponseDto } from './dto/salt-response.dto';

export abstract class SaltsService {
  abstract findSaltByUserId(userId: string): Promise<string>;
  abstract createSalt(createSaltDto: CreateSaltDto): Promise<SaltResponseDto>;
}
