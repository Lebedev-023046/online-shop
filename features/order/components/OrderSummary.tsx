"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import React from "react";

import { formatTitle } from "@/features/product/helpers/formatTitle";

import { DBOrder, UserOrder } from "../types";
import { deliveryMethods, paymentMethods } from "../utils/radioMap";

interface Props {
  order: DBOrder;
}

export function OrderSummary({ order }: Props) {
  const { data } = useSession();
  const { city, street_name, unit_number, flat_number } = order.address;
  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      {/* <LoadingIcon /> */}
      <div className="overflow-x-auto md:col-span-3 [&>section]:mb-4">
        <section className="card p-5">
          <h2 className="mb-2 text-lg">Адрес доставки:</h2>
          <div>
            {city}, {street_name}, {unit_number}-{flat_number}
          </div>

          {data ? (
            <>
              {true ? (
                <div className="alert-success">Доставлено в ...</div>
              ) : (
                <div className="alert-error">Не доставлено</div>
              )}
            </>
          ) : null}
        </section>
        <section className="card p-5">
          <h2 className="mb-2 text-lg">Способ оплаты</h2>
          <div>{paymentMethods[order.payment_method]}</div>

          {data ? (
            <>
              {true ? (
                <div className="alert-success">Оплачено в ...</div>
              ) : (
                <div className="alert-error">Не оплачено</div>
              )}
            </>
          ) : null}
        </section>
        <section className="card overflow-x-auto p-5">
          <h2 className="mb-2 text-lg">Товары заказа</h2>
          <div className="min-w-[375px]">
            <div className="border-b">
              <div className="mb-4 grid grid-cols-4 [&>div]:min-w-[13.75rem] [&>div]:px-5 [&>div+div]:text-right">
                <div className="">Товар</div>
                <div className="">Количество</div>
                <div className="">Цена</div>
                <div className="">Итого</div>
              </div>

              {order.order_line.map(item => {
                const { qty_ordered } = item;
                const { size } = item.product_item;
                const { productImage, name, price } = item.product_item.product;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 [&>div]:mb-4 [&>div]:min-w-[13.75rem] [&>div+div]:px-5 [&>div+div]:text-right"
                  >
                    <div className="flex gap-2 align-top">
                      <div>
                        <Image
                          className="max-w-[6rem] rounded-md object-contain"
                          alt="order-item"
                          src={productImage}
                          width={150}
                          height={300}
                        />
                      </div>
                      <div className="text-sm [&>div]:mb-2">
                        <div>{formatTitle(name)}</div>
                        <div>Размер: {size}</div>
                      </div>
                    </div>
                    <div className="">{qty_ordered}</div>
                    <div className="">{price} BYN</div>
                    <div className="">{qty_ordered * price} BYN</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="card p-5">
          <h2 className="mb-2 text-lg">Итого</h2>
          <ul>
            <li>
              <div className="mb-2 flex justify-between">
                <div>Количество товаров</div>
                <div>
                  {order.order_line.reduce(
                    (acc, item) => acc + item.qty_ordered,
                    0,
                  )}
                </div>
              </div>
            </li>
            <li>
              <div className="mb-2 flex justify-between">
                <div>Способ доставки</div>
                <div>{deliveryMethods[order.delivering_method]}</div>
              </div>
            </li>
            <li>
              <div className="mb-2 flex justify-between">
                <div>Стоимость заказа</div>

                <div>
                  {order.order_line.reduce(
                    (acc, item) => acc + item.price * item.qty_ordered,
                    0,
                  )}{" "}
                  BYN
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
