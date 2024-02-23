export const deliveryMethods: { [key: string]: string } = {
  courier: "Курьер",
  pickup: "Самовывоз",
  post: "Почта",
} as const;

export const paymentMethods: { [key: string]: string } = {
  cash: "Наличными",
  "card-on-receipt": "Картой при получении",
  "card-online": "Картой онлайн",
} as const;
