import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersPrismaService } from './users-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { HasherModule } from '../hasher/hasher.module';

@Module({
  imports: [PrismaModule, HasherModule],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useClass: UsersPrismaService,
    },
  ],
})
export class UsersModule {}
