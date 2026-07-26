import axios from "axios";

export const productApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCT_API,
});

export const customerApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CUSTOMER_API,
});