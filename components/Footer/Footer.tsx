import Link from "next/link";
import React from "react";

const footerInfo = [
  {
    title: "Покупателям",
    subtitle1: "Доставка",
    subtitle2: "Возврат",
    subtitle3: "Оплата",
  },
  {
    title: "О Компании",
    subtitle1: "О нас",
    subtitle2: "Возврат",
    subtitle3: "Юридическая информация",
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="p-10">
        <div className="flex flex-col items-start justify-center gap-x-20 gap-y-8 md:flex-row">
          {footerInfo.map((item, index) => (
            <div key={index}>
              <section>
                <h1 className="pb-4 text-lg font-medium">{item.title}</h1>
                <div className="flex flex-col gap-2 text-sm">
                  <Link href="##">{item.subtitle1}</Link>
                  <Link href="##">{item.subtitle2}</Link>
                  <Link href="##">{item.subtitle3}</Link>
                </div>
              </section>
            </div>
          ))}
          <div className="flex max-w-[500px] flex-col gap-2">
            <p>
              Подпишитесь на нашу e-mail рассылку, чтобы первыми узнавать о
              новостях и акциях MAZY
            </p>
            <input
              className="w-full max-w-[20rem] rounded-sm bg-[#eee] p-1 focus:border-dark focus:outline-none focus:ring-2 focus:ring-dark"
              type="email"
              placeholder="Введите эл. почту"
            />
            <div className="flex gap-5">
              <Link href="##">Instagram</Link>
              <Link href="##">Telegram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
