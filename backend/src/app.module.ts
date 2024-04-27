import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { HasherModule } from './modules/hasher/hasher.module';
import { SaltsModule } from './modules/salts/salts.module';
import { CustomersModule } from './modules/customers/customers.module';
import { StaffModule } from './modules/staff/staff.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { CountriesModule } from './modules/countries/countries.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { CartsModule } from './modules/carts/carts.module';
import { CartItemModule } from './modules/cart-item/cart-item.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    HasherModule,
    SaltsModule,
    CustomersModule,
    StaffModule,
    AddressesModule,
    CountriesModule,
    ContactsModule,
    CartsModule,
    CartItemModule,
  ],
})
export class AppModule {}
