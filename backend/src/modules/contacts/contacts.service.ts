export abstract class ContactsService {
  abstract createContacts(userId: string, contactDtos);
  abstract findDefaultContactOfUser(userId: string): Promise<string>;
}
