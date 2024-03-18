import { Product, ProductItem } from "@/prisma/generated";

export interface CartItem extends ProductItem {
  qty_in_cart: number;
  product: Product;
}
