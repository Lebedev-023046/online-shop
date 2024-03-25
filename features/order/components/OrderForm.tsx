"use client";

import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { PhoneInput, RadioInput, TextInput } from "@/components";
import { useCartContext } from "@/contexts/CartContext";
import { CartItem } from "@/features/cart";
import { $Enums, Address, Order } from "@/prisma/generated";

import { OrderConfirmationModal } from "./OrderConfirmationModal";
import {
  DELIVERING_ADDRESS_FORM_FIELDS,
  DELIVERY_OPTIONS,
  OrderProductsPrescreen,
  PAYMENT_METHOD_OPTIONS,
} from "..";
import { IOrderForm } from "../types";

type OmittedAddress = Omit<
  Address,
  "id" | "createdAt" | "updatedAt" | "user_id"
>;
type OmittedOrder = Omit<
  Order,
  "id" | "user_id" | "address_id" | "createdAt" | "updatedAt"
>;
interface UserOrder extends OmittedOrder {
  address: OmittedAddress;
  order_line: CartItem[];
}

export function OrderForm() {
  const { cart } = useCartContext();
  const { register, handleSubmit } = useForm<IOrderForm>();

  const [showConfirmationModal, setShowConfirmationModal] =
    useState<boolean>(false);

  const updateShowConfirmationModal = useCallback((value: boolean) => {
    setShowConfirmationModal(value);
  }, []);

  const [orderForm, setOrderForm] = useState<IOrderForm>({
    phone_number: "",
    city: "",
    street_name: "",
    unit_number: "",
    entrance_number: "",
    flat_number: "",
    postal_code: "",
    delivering_method: "Courier",
    payment_method: "Cash",
    orderStatus: "Pending",
  });

  const onSubmit: SubmitHandler<IOrderForm> = async data => {
    try {
      const { phone_number, payment_method, delivering_method, ...address } =
        data;

      const order: UserOrder = {
        phone_number,
        payment_method,
        delivering_method,
        order_status: "Pending",
        address,
        order_line: cart,
        total_order_price: cart.reduce(
          (acc, item) => acc + item.product.price * item.qty_in_cart,
          0,
        ),
      };
      console.log({ order });

      setOrderForm(data);
      updateShowConfirmationModal(true);
    } catch (error) {
      // Handle errors or set form errors using setError
    }
  };
  return (
    <>
      {showConfirmationModal ? (
        <OrderConfirmationModal
          orderForm={orderForm}
          updateShowConfirmationModal={updateShowConfirmationModal}
        />
      ) : null}
      <section className="mx-auto w-[95%]">
        <h1 className="pt-4 text-center text-2xl font-medium">
          Ваш заказ в MAZY
        </h1>
        <div>
          <div className="m-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full w-full rounded-md border-2"
            >
              <div className="grid justify-center gap-4 sm:grid-cols-1 xmd:grid-cols-[30%_20%_45%]">
                <div className="rounded-md p-6 [&>section+section]:pt-8">
                  <section>
                    <h1>Телефон получателя</h1>
                    <div>
                      <PhoneInput
                        name="phone_number"
                        placeholder="+375 44 111-11-11"
                        register={register}
                        defaultValue={orderForm["phone_number"]}
                      />
                    </div>
                  </section>
                  <section>
                    <h1 className="">Адрес доставки</h1>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {DELIVERING_ADDRESS_FORM_FIELDS.map((props, i) => (
                        <TextInput
                          register={register}
                          defaultValue={
                            orderForm[props.name as keyof IOrderForm]
                          }
                          {...props}
                          key={i}
                        />
                      ))}
                    </div>
                  </section>
                </div>
                <div className="rounded-md  p-6 [&>section+section]:pt-4">
                  <section>
                    <h1 className="">Способ доставки</h1>
                    <fieldset className="">
                      {DELIVERY_OPTIONS.map((props, i) => (
                        <RadioInput register={register} {...props} key={i} />
                      ))}
                    </fieldset>
                  </section>
                  <section>
                    <h1 className="">Способ оплаты</h1>
                    <fieldset className="">
                      {PAYMENT_METHOD_OPTIONS.map((props, i) => (
                        <RadioInput register={register} {...props} key={i} />
                      ))}
                    </fieldset>
                  </section>
                </div>
                <div className="m-6 rounded-md xmd:col-span-1 [&>section+section]:pt-4">
                  <OrderProductsPrescreen />
                </div>
              </div>

              <div className="p-6 text-right">
                <button
                  type="submit"
                  className="hover:text-md inline-flex justify-center rounded-md border border-transparent bg-dark px-4 py-2 text-sm font-medium text-soft shadow-sm"
                >
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
