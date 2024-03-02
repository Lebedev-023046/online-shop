import Image from "next/image";

import { Select } from "@/components/Select";

export default function ProductDetails() {
  return (
    <div className="mx-auto w-[95%] py-8">
      <div className="mx-auto flex w-[80%] flex-col justify-center gap-8 md:w-full md:flex-row">
        <div className="order-2 md:order-none">
          <Image
            className="img mx-auto"
            src="/hero-image.jpg"
            width={400}
            height={600}
            alt="product-details-image"
          />
        </div>
        <section className="">
          <h1 className="text-2xl font-bold">Серый костюм женский</h1>
          <p className="mt-2 text-gray-500">Артикул: BY2022M</p>
          <p className="mt-4 text-2xl font-bold">148 BYN</p>

          <div className="relative mt-4">
            <label
              htmlFor="countries"
              className="block font-medium text-gray-900 dark:text-gray-400"
            >
              Размер
            </label>
            <Select options={["XS", "S", "M", "L"]} />
            <Image
              className="absolute right-4 top-[55%] -z-10 h-auto rotate-90"
              src="/right-stroke.svg"
              alt="select-icon"
              width={10}
              height={10}
            />
          </div>
          <button className="button mt-8 bg-dark text-soft">
            Добавить в корзину
          </button>
        </section>
      </div>
    </div>
  );
}
