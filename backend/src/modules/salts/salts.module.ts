import { Module } from '@nestjs/common';
import { SaltsService } from './salts.service';
import { SaltsPrismaService } from './salts-prisma.service';

@Module({
  exports: [SaltsService],
  providers: [{ provide: SaltsService, useClass: SaltsPrismaService }],
})
export class SaltsModule {}
