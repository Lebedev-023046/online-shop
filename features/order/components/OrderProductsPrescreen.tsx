import Image from "next/image";
import React from "react";

export function OrderProductsPrescreen() {
  return (
    <div>
      <div className="border-b-2">
        <div className="my-6 h-64 overflow-y-auto [&>div+div]:pt-4">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-24">
                  <Image
                    className="img"
                    src="/hero-image.jpg"
                    alt="order-image"
                    width={200}
                    height={300}
                  />
                </div>
                <section className="flex flex-col py-3">
                  <h1 className="text-xl font-medium tracking-wider">
                    Костюм женский
                  </h1>
                  <p className="font-medium text-gray-700">
                    Серый <span className="font-bold">&middot;</span> S{" "}
                    <span className="font-bold">&middot;</span> x1{" "}
                  </p>
                  <p className="pt-4 font-bold">148 BYN</p>
                </section>
              </div>
            ))}
        </div>
      </div>
      <div className="pt-4">
        Стоимость всего заказа: <span className="font-bold">1140</span> BYN
      </div>
    </div>
  );
}
