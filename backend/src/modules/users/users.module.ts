import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersPrismaService } from './users-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';
import { HasherModule } from '../hasher/hasher.module';
import { SaltsModule } from '../salts/salts.module';
import { ContactsModule } from '../contacts/contacts.module';

@Module({
  imports: [PrismaModule, HasherModule, SaltsModule, ContactsModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      useClass: UsersPrismaService,
    },
  ],
})
export class UsersModule {}
