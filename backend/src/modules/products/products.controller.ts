import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/products')
export class ProductsController {
  @Get()
  findAllProducts() {
    return 'products';
  }
}
