import { Module } from '@nestjs/common';
import { SaltsService } from './salts.service';
import { SaltsPrismaService } from './salts-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [SaltsService],
  providers: [{ provide: SaltsService, useClass: SaltsPrismaService }],
})
export class SaltsModule {}
