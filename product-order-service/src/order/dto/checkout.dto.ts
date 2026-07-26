import {
  IsArray,
  IsInt,
  IsPositive,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CheckoutItemDto } from './checkout-item.dto';

export class CheckoutDto {
  @IsInt()
  @IsPositive()
  customerId: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items: CheckoutItemDto[];
}
