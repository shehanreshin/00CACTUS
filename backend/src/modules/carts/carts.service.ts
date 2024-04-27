export abstract class CartsService {
  abstract createCart(userId: string);
  abstract findCartByUserId(userId: string);
}
