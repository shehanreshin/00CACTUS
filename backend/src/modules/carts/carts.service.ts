export abstract class CartsService {
  abstract createCart(customerId: string);
  abstract findCartByCustomerId(customerId: string);
}
