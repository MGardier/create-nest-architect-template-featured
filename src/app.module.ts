import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    // Import necessary modules here (ormModules, etc.)
    ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
