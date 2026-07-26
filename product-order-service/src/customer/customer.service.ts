import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CustomerService {
  async validateCustomer(id: number) {
    try {
      const response = await axios.get(
        `http://localhost:3002/customers/${id}`,
      );

      return response.data;
    } catch {
      throw new NotFoundException('Customer not found');
    }
  }
}