export abstract class HasherService {
  abstract hash(password: string, salt: string): string;
  abstract genSalt(): string;
  abstract compare(password: string, hash: string): boolean;
}
