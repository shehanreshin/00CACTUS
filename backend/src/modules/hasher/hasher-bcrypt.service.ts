import { Injectable } from '@nestjs/common';
import { HasherService } from './hasher.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HasherBcryptService implements HasherService {
  compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
  hash(password: string, salt: string): string {
    return bcrypt.hashSync(password, salt);
  }
  genSalt(): string {
    return bcrypt.genSaltSync();
  }
}
