import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsPrismaService } from './carts-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [CartsService],
  providers: [{ provide: CartsService, useClass: CartsPrismaService }],
})
export class CartsModule {}
