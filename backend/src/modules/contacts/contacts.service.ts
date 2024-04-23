import { CreateContactDto } from './dto/create-contact.dto';
import { ContactResponseDto } from './dto/contact-response.dto';

export abstract class ContactsService {
  abstract createContacts(
    userId: string,
    contactDtos: CreateContactDto[],
  ): Promise<ContactResponseDto[]>;
  abstract findDefaultContactOfUser(userId: string): Promise<string>;
}
