import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersPrismaService } from './users-prisma.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useClass: UsersPrismaService,
    },
  ],
})
export class UsersModule {}
