import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  onClick?: <T>(value: T) => void;
  small?: boolean;
}

export function Icon({ src, alt, small, onClick }: Props) {
  const size = small ? 20 : 24;

  return (
    <div onClick={onClick} className={`cursor-pointer w-[${size}] h-[${size}]`}>
      <Image className="block" src={src} alt={alt} width={size} height={size} />
    </div>
  );
}
