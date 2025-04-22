import Link from "next/link";
import React from "react";
import Image from "next/image";
import GaelleLagoattePP from "@public/notfound.png.webp";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Image
        src={GaelleLagoattePP}
        alt="Gaelle Lagoatte"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold">Il semble que tu te sois perdu...</h1>
      <p className="text-2xl">404 - La page que vous cherchez n'existe pas.</p>
      <Link href="/" className="text-blue-500">
        <Button>Retour à la page d'accueil</Button>
      </Link>
    </div>
  );
}
