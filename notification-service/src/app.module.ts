import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    RabbitMQService,
    EmailService,
  ],
})
export class AppModule {}
