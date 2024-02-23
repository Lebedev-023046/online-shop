export const SHIPPING_ADDRESS_FORM_FIELDS = [
  { name: "city", label: "Город", placeholder: "Минск" },
  { name: "street_name", label: "Улица", placeholder: "Центральная" },
  { name: "unit_number", label: "Номер дома", placeholder: "1" },
  { name: "entrance_number", label: "Номер подъезда", placeholder: "1" },
  { name: "flat_number", label: "Номер вартиры", placeholder: "1" },
  { name: "postal_code", label: "Почтовый индекс", placeholder: "111111" },
];

export const DELIVERY_OPTIONS = [
  {
    name: "deliveryOption",
    value: "courier",
    label: "Доставка курьером",
  },
  {
    name: "deliveryOption",
    value: "pickup",
    label: "Самовывоз",
  },
  {
    name: "deliveryOption",
    value: "post",
    label: "Почта",
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    name: "paymentMethodOption",
    value: "cash",
    label: "Наличными",
  },
  {
    name: "paymentMethodOption",
    value: "card-on-receipt",
    label: "Картой при получении",
  },
  {
    name: "paymentMethodOption",
    value: "card-online",
    label: "Картой онлайн",
  },
];
