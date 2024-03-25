export const deliveryMethods: { [key: string]: string } = {
  Courier: "Курьер",
  Pickup: "Самовывоз",
  Post: "Почта",
} as const;

export const paymentMethods: { [key: string]: string } = {
  Cash: "Наличными",
  CardOnReceipt: "Картой при получении",
  CardOnline: "Картой онлайн",
} as const;
