import { Body, Controller, Post } from '@nestjs/common';

import { OrderService } from './order.service';

import { CheckoutDto } from './dto/checkout.dto';

@Controller('orders')
export class OrderController {

  constructor(
    private readonly orderService: OrderService,
  ) {}

  @Post('checkout')
  checkout(@Body() dto: CheckoutDto) {
    return this.orderService.checkout(dto);
  }

}
