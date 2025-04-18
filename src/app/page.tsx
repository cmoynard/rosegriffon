"use client";

import React from "react";
import HomeCarousel from "./_components/HomeCarousel";
import FusionBlock from "./_components/FusionBlock";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div className="flex flex-col mb-8">
      <HomeCarousel />
      <div className="flex flex-col gap-8 px-4 mt-8">
        <FusionBlock isImageLeft={true}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Titre de la section</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </FusionBlock>

        <div className="flex text-6xl font-bold items-center gap-2">
          <Image
            src={LogoRG}
            alt="Rose Griffon Logo"
            height={128}
            width={128}
          />
          Nos projets
          <a
            href="/projects"
            className="ml-4 text-lg font-medium bg-slate-800 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-md"
          >
            Voir plus
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <FusionBlock isImageLeft={false}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Projet 1</h2>
            <p className="text-lg">Ceci est un projet de test.</p>
          </div>
        </FusionBlock>
        <FusionBlock isImageLeft={true}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Projet 1</h2>
            <p className="text-lg">Ceci est un projet de test.</p>
          </div>
        </FusionBlock>
      </div>
    </div>
  );
}
