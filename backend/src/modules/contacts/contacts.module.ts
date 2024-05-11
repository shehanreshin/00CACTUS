import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsPrismaService } from './contacts-prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [ContactsService],
  providers: [{ provide: ContactsService, useClass: ContactsPrismaService }],
})
export class ContactsModule {}
