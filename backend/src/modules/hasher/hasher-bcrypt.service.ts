import { Injectable } from '@nestjs/common';
import { HasherService } from './hasher.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HasherBcryptService implements HasherService {
  compare(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
  hash(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
  genSalt() {
    return bcrypt.genSalt();
  }
}
