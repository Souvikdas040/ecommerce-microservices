import { Injectable, OnModuleInit } from '@nestjs/common';

import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQConsumer implements OnModuleInit {
  async onModuleInit() {
    const connection = await amqp.connect(
      process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672',
    );

    const channel = await connection.createChannel();

    await channel.assertQueue('order.created');

    console.log('✅ Customer Service connected to RabbitMQ');

    channel.consume(
      'order.created',

      (msg) => {
        if (!msg) return;

        const data = JSON.parse(msg.content.toString());

        console.log('📥 Order Received', data);

        channel.ack(msg);
      },
    );
  }
}
