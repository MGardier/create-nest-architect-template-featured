import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [
    // Import necessary modules here (ormModules, etc.)
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
