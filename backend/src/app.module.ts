import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { HasherModule } from './modules/hasher/hasher.module';
import { SaltsModule } from './modules/salts/salts.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomersModule } from './modules/customers/customers.module';
import { StaffModule } from './modules/staff/staff.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { CountriesModule } from './modules/countries/countries.module';

@Module({
  imports: [UsersModule, ProductsModule, HasherModule, SaltsModule, CustomerModule, CustomersModule, StaffModule, AddressesModule, CountriesModule],
})
export class AppModule {}
