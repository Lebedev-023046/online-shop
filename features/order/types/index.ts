import { CartItem } from "@/features/cart";
import {
  $Enums,
  Address,
  Order,
  OrderLine,
  Product,
  ProductItem,
} from "@/prisma/generated";

type OmittedAddress = Omit<
  Address,
  "id" | "createdAt" | "updatedAt" | "user_id"
>;
type OmittedOrder = Omit<
  Order,
  "user_id" | "address_id" | "createdAt" | "updatedAt"
>;
export interface UserOrder extends OmittedOrder {
  address: OmittedAddress;
  order_line: CartItem[];
}

interface ExtendedProductItem extends ProductItem {
  product: Product;
}

export interface ExtendedOrderLine extends OrderLine {
  product_item: ExtendedProductItem;
}

export interface DBOrder extends Order {
  address: Address;
  order_line: ExtendedOrderLine[];
}

export interface IOrderForm {
  phone_number: string;
  city: string;
  street_name: string;
  unit_number: string;
  entrance_number: string;
  flat_number: string;
  postal_code: string;
  delivering_method: $Enums.DeliveringMethod;
  payment_method: $Enums.PaymentMethod;
  orderStatus: $Enums.OrderStatus;
}
