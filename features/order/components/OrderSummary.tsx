import React from "react";

export function OrderSummary() {
  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className="overflow-x-auto md:col-span-3">
        <section className="card p-5">
          <h2 className="mb-2 text-lg">Адрес доставки:</h2>
          <div>Минск, Лазо, 24-2</div>
          {true ? (
            <div className="alert-success">Доставлено в ...</div>
          ) : (
            <div className="alert-error">Не доставлено</div>
          )}
        </section>
        <section className="card p-5">
          <h2 className="mb-2 text-lg">Способ оплаты</h2>
          <div>Карта наличными</div>
          {true ? (
            <div className="alert-success">Оплачено в ...</div>
          ) : (
            <div className="alert-error">Не оплачено</div>
          )}
        </section>
        <section className="card overflow-x-auto p-5">
          <h2 className="mb-2 text-lg">Товары заказа</h2>
          <div className="min-w-[375px]">
            <div className="border-b">
              <div className="grid grid-cols-4 [&>div+div]:text-right [&>div]:px-5">
                <div className="">Товар</div>
                <div className="">Количество</div>
                <div className="">Цена</div>
                <div className="">Итого</div>
              </div>
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
                {/* <div>{itemsPrice} BYN</div> */}
              </div>
            </li>
            <li>
              <div className="mb-2 flex justify-between">
                <div>Способ доставки</div>
                {/* <div>{shippingPrice} BYN</div> */}
              </div>
            </li>
            <li>
              <div className="mb-2 flex justify-between">
                <div>Стоимость заказа</div>
                {/* <div>{totalPrice} BYN</div> */}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
