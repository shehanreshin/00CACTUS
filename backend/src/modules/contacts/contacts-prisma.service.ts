import { ContactsService } from './contacts.service';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

@Injectable()
export class ContactsPrismaService implements ContactsService {
  constructor(private readonly prisma: PrismaService) {}
  async findDefaultContactOfUser(userId: string): Promise<string> {
    const contact = (
      await this.prisma.contact.findMany({
        where: { userId, isDefault: true },
        take: 1,
        include: { country: true },
      })
    )[0];
    if (!contact) throw new ResourceNotFoundException('Contact not found');

    return `${contact.country.code}${contact.phoneNumber}`;
  }
  createContacts(userId: string, contactDtos: CreateContactDto[]) {
    throw new Error('Method not implemented.');
  }
}
