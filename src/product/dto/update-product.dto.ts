import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// Example implementation
export class UpdateProductDto extends PartialType(CreateProductDto) {}
