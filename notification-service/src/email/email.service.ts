import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendOrderConfirmation(order: any) {
    console.log('\n===================================');
    console.log('📧 ORDER CONFIRMATION EMAIL');
    console.log('===================================');

    console.log(`Customer ID : ${order.customerId}`);
    console.log(`Order ID    : ${order.orderId}`);
    console.log(`Amount      : ₹${order.totalAmount}`);

    console.log('\nProducts');

    order.items.forEach((item: any) => {
      console.log(
        `Product ${item.productId} | Qty: ${item.quantity}`,
      );
    });

    console.log('\n✅ Email Sent Successfully');
    console.log('===================================\n');
  }
}