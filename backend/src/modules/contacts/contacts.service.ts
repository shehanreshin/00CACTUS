import { CreateContactDto } from './dto/create-contact.dto';

export abstract class ContactsService {
  abstract createContacts(userId: string, contactDtos: CreateContactDto[]);
  abstract findDefaultContactOfUser(userId: string): Promise<string>;
}
