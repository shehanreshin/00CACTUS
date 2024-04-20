export abstract class HasherService {
  abstract hash(password: string, salt: string);
  abstract genSalt();
  abstract compare(password: string, hash: string);
}
