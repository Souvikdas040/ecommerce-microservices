import { IsInt, IsPositive } from 'class-validator';

export class CheckoutItemDto {
  @IsInt()
  @IsPositive()
  productId: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}
