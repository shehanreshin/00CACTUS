import { Module } from '@nestjs/common';
import { HasherService } from './hasher.service';
import { HasherBcryptService } from './hasher-bcrypt.service';

@Module({
  exports: [HasherService],
  providers: [
    {
      provide: HasherService,
      useClass: HasherBcryptService,
    },
  ],
})
export class HasherModule {}
