type deliveryOption = "courier" | "pickup" | "post";
type paymentMethodOption = "cash" | "card-on-receipt" | "card-online";
type orderStatus = "pending" | "confirmed" | "shipped" | "delivered";

export interface OrderForm {
  phone_number: string;
  city: string;
  street_name: string;
  unit_number: string;
  entrance_number: string;
  flat_number: string;
  postal_code: string;
  deliveryOption: deliveryOption;
  paymentMethodOption: paymentMethodOption;
  orderStatus: orderStatus;
}
