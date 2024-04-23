import { ContactsService } from './contacts.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsPrismaService implements ContactsService {
  findDefaultContactOfUser(userId: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  createContacts(userId: string, contactDtos: any) {
    throw new Error('Method not implemented.');
  }
}
