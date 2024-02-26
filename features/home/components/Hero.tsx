import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const berkshire = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export function Hero() {
  return (
    <div className="flex-center mb-10 bg-soft">
      <section className="flex w-full flex-col items-center justify-end px-6 py-12 text-center xmd:w-3/5">
        <h1
          className={`${berkshire.className} mb-4 text-nowrap text-6xl font-medium tracking-wider`}
        >
          Mazy Brand
        </h1>
        <p className="font-light">
          Одежда, вдохновленная стилем – ваш выбор, наша коллекция!
        </p>
        <p className="font-light">Уют и стиль – в каждой детали!</p>
      </section>
      <div className="hidden w-2/5 xmd:block">
        <Image
          className="h-auto w-4/5"
          width={633}
          height={887}
          src="/hero.png"
          alt="hero-image"
        />
      </div>
    </div>
  );
}
