// export interface Address {
//   id?: number;
//   city: string;
//   street_name: string;
//   unit_number: number;
//   entrance_number: number;
//   flat_number: number;
//   postal_code: string;
// }

import { Address } from "@/prisma/generated";

export interface Order {
  id: number;
  customer_id: number;
  phone_number: string;
  payment_method_id: string;
  delivering_address: Address & { id?: number };
  delivering_method: number;
  order_total: number;
  order_status: number;
}
