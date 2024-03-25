export const DELIVERING_ADDRESS_FORM_FIELDS = [
  { name: "city", label: "Город", placeholder: "Минск" },
  { name: "street_name", label: "Улица", placeholder: "Центральная" },
  { name: "unit_number", label: "Номер дома", placeholder: "1" },
  { name: "entrance_number", label: "Номер подъезда", placeholder: "1" },
  { name: "flat_number", label: "Номер вартиры", placeholder: "1" },
  { name: "postal_code", label: "Почтовый индекс", placeholder: "111111" },
];

export const DELIVERY_OPTIONS = [
  {
    name: "delivering_method",
    value: "Courier",
    label: "Доставка курьером",
  },
  {
    name: "delivering_method",
    value: "Pickup",
    label: "Самовывоз",
  },
  {
    name: "delivering_method",
    value: "Post",
    label: "Почта",
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    name: "payment_method",
    value: "Cash",
    label: "Наличными",
  },
  {
    name: "payment_method",
    value: "CardOnReceipt",
    label: "Картой при получении",
  },
  {
    name: "payment_method",
    value: "CardOnline",
    label: "Картой онлайн",
  },
];
