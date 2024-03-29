"use client";

import Link from "next/link";
import React from "react";

import { Modal } from "@/shared/Modal";

import { OrderProductsPrescreen } from "..";
import { IOrderForm } from "../types";
import { deliveryMethods, paymentMethods } from "../utils/radioMap";

interface Props {
  orderForm: IOrderForm;
  updateShowConfirmationModal: (value: boolean) => void;
}

export function OrderConfirmationModal({
  orderForm,
  updateShowConfirmationModal,
}: Props) {
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
    <Modal onClose={updateShowConfirmationModal.bind(null, false)}>
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
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
    </Modal>
  );
}
