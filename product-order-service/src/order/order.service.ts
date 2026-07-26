import { Injectable, BadRequestException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository, DataSource } from 'typeorm';

import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../product/entities/product.entity';

import { CheckoutDto } from './dto/checkout.dto';
import { RabbitMQService } from '../rabbitmq/rabbitmq.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly rabbitMQService: RabbitMQService,

    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async checkout(dto: CheckoutDto) {
    let totalAmount = 0;

    const orderItems: OrderItem[] = [];

    for (const item of dto.items) {
      const product = await this.productRepository.findOneBy({
        id: item.productId,
      });

      if (!product) {
        throw new BadRequestException(`Product ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new BadRequestException(`${product.name} is out of stock`);
      }

      totalAmount += Number(product.price) * item.quantity;

      product.stock -= item.quantity;

      await this.productRepository.save(product);

      const orderItem = this.orderItemRepository.create({
        product,
        quantity: item.quantity,
        price: product.price,
      });

      orderItems.push(orderItem);
    }

    const order = this.orderRepository.create({
      customerId: dto.customerId,
      totalAmount,
      status: 'CONFIRMED',
      items: orderItems,
    });

    const savedOrder = await this.orderRepository.save(order);

    await this.rabbitMQService.publish('order.created', {
      orderId: savedOrder.id,
      customerId: savedOrder.customerId,
      totalAmount: savedOrder.totalAmount,
      items: dto.items,
    });

    return savedOrder;
  }
}
