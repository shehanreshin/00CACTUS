import { ContactsService } from './contacts.service';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { plainToInstance } from 'class-transformer';
import { ContactResponseDto } from './dto/contact-response.dto';

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

  async createContacts(userId: string, contactDtos: CreateContactDto[]) {
    const contacts = [];
    for (const { isDefault, phoneNumber, country } of contactDtos) {
      const contact = await this.prisma.contact.create({
        data: {
          user: { connect: { id: userId } },
          country: { connect: { id: country.id } },
          isDefault: isDefault,
          phoneNumber: phoneNumber,
        },
      });
      if (!contact) throw new CreationFailedException('Contact not created');

      contacts.push(contact);
    }

    return plainToInstance(ContactResponseDto, contacts);
  }
}
