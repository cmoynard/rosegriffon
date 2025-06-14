"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import GaelleLagoattePP from "@public/notfound.png.webp";
import { Button } from "@/components/ui/button";
import TextPressure from "@/components/blocks/TextAnimations/TextPressure/TextPressure";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Image
        src={GaelleLagoattePP}
        alt="Gaelle Lagoatte"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold">
        <TextPressure
          text="Il_semble_que_tu_te_sois_perdu..."
          fontFamily="Compressa VF"
          fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
          flex={true}
          weight={true}
          italic={true}
          scale={false}
          textColor="#000000"
          strokeWidth={2}
          className="text-8xl font-bold"
          minFontSize={80}
        />
      </h1>
      <p className="text-2xl">
        404 - La page que vous cherchez n&apos;existe pas.
      </p>
      <Link href="/" className="text-blue-500">
        <Button>Retour à la page d&apos;accueil</Button>
      </Link>
    </div>
  );
}
