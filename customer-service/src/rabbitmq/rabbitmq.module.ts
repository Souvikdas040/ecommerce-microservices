import { Module } from '@nestjs/common';
import { RabbitMQConsumer } from './rabbitmq.consumer';

@Module({
  providers: [RabbitMQConsumer],
})
export class RabbitMQModule {}