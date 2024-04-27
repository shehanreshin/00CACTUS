import { CartsService } from './carts.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';

@Injectable()
export class CartsPrismaService implements CartsService {
  constructor(private readonly prisma: PrismaService) {}
  async createCart(customerId: string) {
    const cart = await this.prisma.cart.create({
      data: { customerId },
      include: { CartItem: true },
    });
    if (!cart) throw new CreationFailedException('Cart not created');

    return cart;
  }
  async findCartByCustomerId(customerId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { customerId },
      include: { CartItem: true },
    });
    if (!cart) throw new ResourceNotFoundException('Cart not found');

    return cart;
  }
}
