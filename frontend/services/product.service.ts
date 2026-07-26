import { productApi } from "./api";

export const getProducts = async () => {
  const response = await productApi.get("/products");
  return response.data;
};

export const getProduct = async (id: number) => {
  const response = await productApi.get(`/products/${id}`);
  return response.data;
};