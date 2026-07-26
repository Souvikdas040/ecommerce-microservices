import { customerApi } from "./api";

export const createCustomer = async (data: {
  name: string;
  email: string;
  phone: string;
}) => {
  const response = await customerApi.post("/customers", data);
  return response.data;
};