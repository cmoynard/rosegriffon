import Image from "next/image";
import LogoRG from "../../../public/logo-rg-vide-mais-blanc.png";

import React from "react";

type RGIconProps = {
  width?: number;
  height?: number;
};

// exporter l'image et la renommer RGicon
export default function RGIcon({ width, height }: RGIconProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={LogoRG.src}
        alt="Logo Rose Griffon"
        width={width ?? 24}
        height={height ?? 24}
      />
    </div>
  );
}
