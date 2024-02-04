import Image from "next/image";
import React from "react";

export function Card() {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg border-2">
      <div className="relative">
        <Image
          className="aspect-[3/4] w-full"
          src="/hero-image.jpg"
          alt="hero-img"
          width={225}
          height={300}
        />
      </div>
      <div>Костюм женский серый</div>
      <div>148 BYN</div>
    </div>
  );
}
