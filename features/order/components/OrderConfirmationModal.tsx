"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";

import { useCartContext } from "@/contexts/CartContext";
import { useOrderContext } from "@/contexts/OrderContext";
import { Modal } from "@/shared/Modal";

import { OrderProductsPrescreen } from "..";
import { IOrderForm, UserOrder } from "../types";
import { deliveryMethods, paymentMethods } from "../utils/radioMap";

interface Props {
  orderForm: IOrderForm;
  updateShowConfirmationModal: (value: boolean) => void;
}

export function OrderConfirmationModal({
  orderForm,
  updateShowConfirmationModal,
}: Props) {
  const router = useRouter();
  const { cart, emptyCart } = useCartContext();
  const { initOrder } = useOrderContext();

  // const { data } = useSession();

  const {
    phone_number,
    city,
    street_name,
    unit_number,
    entrance_number,
    flat_number,
    postal_code,
    delivering_method,
    payment_method,
  } = orderForm;

  const createOrder = async () => {
    const { phone_number, payment_method, delivering_method, ...address } =
      orderForm;

    const total_order_price = cart.reduce(
      (acc, item) => acc + item.product.price * item.qty_in_cart,
      0,
    );

    // create order
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderForm, cart }),
    });

    // and receive it's ID back
    const orderId = await response.json();

    // to add it to the order context
    const order: UserOrder = {
      id: orderId,
      phone_number,
      payment_method,
      delivering_method,
      order_status: "Pending",
      address,
      order_line: cart,
      total_order_price,
    };
    initOrder(order);

    // and redirect to the right order page
    if (orderId) {
      router.push(`/order/${orderId}`);
    }

    // and empty the cart
    emptyCart();
  };

  return (
    <Modal onClose={updateShowConfirmationModal.bind(null, false)}>
      <div className="w-full  rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Детали заказа</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="grow">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Телефон</h3>
              <p>{phone_number}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Адрес</h3>
              <p>
                {city}, {street_name} {unit_number}, {entrance_number},{" "}
                {flat_number}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Почтовый индекс</h3>
              <p>{postal_code}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Доставка</h3>
              <p>{deliveryMethods[delivering_method]}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Оплата</h3>
              <p>{paymentMethods[payment_method]}</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Товары</h3>
              <div className="h-full overflow-y-auto">
                <OrderProductsPrescreen />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={updateShowConfirmationModal.bind(null, false)}
            className="rounded border-2 border-dark px-4 py-2 font-bold"
          >
            Назад
          </button>
          <button
            onClick={createOrder}
            className="rounded bg-dark px-4 py-2 font-bold text-white transition hover:bg-dark/90"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </Modal>
  );
}
