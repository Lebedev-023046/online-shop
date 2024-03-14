import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  onClose?: <T>(value: T) => void;
  small?: boolean;
}

export function Icon({ src, alt, small, onClose }: Props) {
  const size = small ? 20 : 24;

  return (
    <div onClick={onClose} className="cursor-pointer">
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
}
