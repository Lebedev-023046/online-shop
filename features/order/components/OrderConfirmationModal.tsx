"use client";

import Link from "next/link";
import React from "react";

import { OrderProductsPrescreen } from "..";
import { OrderForm } from "../types";
import { deliveryMethods, paymentMethods } from "../utils/radioMap";
import { useBackgroundContext } from "@/contexts/background";

interface Props {
  orderForm: OrderForm;
  updateShowConfirmationModal: (value: boolean) => void;
}

export function OrderConfirmationModal({
  orderForm,
  updateShowConfirmationModal,
}: Props) {
  const { isBackgroundActive } = useBackgroundContext();

  const {
    phone_number,
    city,
    street_name,
    unit_number,
    entrance_number,
    flat_number,
    postal_code,
    deliveryOption,
    paymentMethodOption,
  } = orderForm;

  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-black/20">
      <div className="m-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Детали заказа</h2>
        <div className="flex gap-4">
          <div>
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
              <p>{deliveryMethods[deliveryOption]}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Оплата</h3>
              <p>{paymentMethods[paymentMethodOption]}</p>
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
          <Link
            href={`/order/${1}`}
            className="rounded bg-dark px-4 py-2 font-bold text-white transition hover:bg-dark/90"
          >
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
}
