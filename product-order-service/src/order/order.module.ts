import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';

import { RabbitMQModule } from '../rabbitmq/rabbitmq.module';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';
import { CustomerService } from 'src/customer/customer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, Product]),
    RabbitMQModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, RabbitMQService, CustomerService],
})
export class OrderModule {}
