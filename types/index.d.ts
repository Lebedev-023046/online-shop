import { User } from "next-auth";

export interface IProduct {
  title: string;
  category_name: string;
  description: string;
  color: string;
  image: string;
}

export interface IProductItem extends IProduct {
  productId: string;
  SKU: string;
  size: string;
  price: number;
  quantity_in_stock: number;
}

export interface IUserResponse {
  success: User;
  error: string;
}
