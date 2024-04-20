import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { HasherModule } from './modules/hasher/hasher.module';
import { SaltsModule } from './modules/salts/salts.module';

@Module({
  imports: [UsersModule, ProductsModule, HasherModule, SaltsModule],
})
export class AppModule {}
