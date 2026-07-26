import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { EmailService } from '../email/email.service';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  constructor(
    private readonly emailService: EmailService,
  ) {}

  async onModuleInit() {
    const connection = await amqp.connect(
      process.env.RABBITMQ_URL ||
      'amqp://guest:guest@localhost:5672',
    );

    const channel = await connection.createChannel();

    const exchange = 'ecommerce';

    await channel.assertExchange(exchange, 'topic', {
      durable: true,
    });

    const queue = 'notification.queue';

    await channel.assertQueue(queue, {
      durable: true,
    });

    await channel.bindQueue(
      queue,
      exchange,
      'order.created',
    );

    console.log('📨 Waiting for orders...\n');

    channel.consume(queue, async (msg) => {
      if (!msg) return;

      const order = JSON.parse(msg.content.toString());

      console.log('📦 New Order Received');

      await this.emailService.sendOrderConfirmation(order);

      channel.ack(msg);
    });
  }
}