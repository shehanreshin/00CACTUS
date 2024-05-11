import { CartsService } from './carts.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreationFailedException } from '../../common/exceptions/creation-failed.exception';
import { ResourceNotFoundException } from '../../common/exceptions/resource-not-found.exception';
import { plainToInstance } from 'class-transformer';
import { CartResponseDto } from './dto/cart-response.dto';

@Injectable()
export class CartsPrismaService implements CartsService {
  constructor(private readonly prisma: PrismaService) {}
  async createCart(customerId: string) {
    const cart = await this.prisma.cart.create({
      data: { customer: { connect: { id: customerId } } },
      include: { CartItem: true },
    });
    if (!cart) throw new CreationFailedException('Cart not created');

    return plainToInstance(CartResponseDto, cart);
  }
  async findCartByCustomerId(customerId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { customerId },
      include: { CartItem: true },
    });
    if (!cart) throw new ResourceNotFoundException('Cart not found');

    return plainToInstance(CartResponseDto, cart);
  }
}
