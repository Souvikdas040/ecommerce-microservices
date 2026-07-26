import { productApi } from "./api";

export const checkout = async (data: {
  customerId: number;
  items: {
    productId: number;
    quantity: number;
  }[];
}) => {
  const response = await productApi.post("/orders/checkout", data);
  return response.data;
};