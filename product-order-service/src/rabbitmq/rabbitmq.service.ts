import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQService
  implements OnModuleInit, OnModuleDestroy
{
  private connection!: amqp.ChannelModel;
  private channel!: amqp.Channel;

  async onModuleInit() {
    this.connection = await amqp.connect(
      process.env.RABBITMQ_URL ||
        'amqp://guest:guest@localhost:5672',
    );

    this.channel = await this.connection.createChannel();

    await this.channel.assertQueue('order.created', {
      durable: true,
    });

    console.log('✅ RabbitMQ Connected');
  }

  async publish(queue: string, message: any) {
    this.channel.sendToQueue(
      queue,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true,
      },
    );

    console.log(`📤 Published: ${queue}`);
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }
}
