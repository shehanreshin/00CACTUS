import { CartsService } from './carts.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartsPrismaService implements CartsService {
  createCart(userId: string) {
    throw new Error('Method not implemented.');
  }
  findCartByUserId(userId: string) {
    throw new Error('Method not implemented.');
  }
}
