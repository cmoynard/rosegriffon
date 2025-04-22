"use client";

import React from "react";
import HomeCarousel from "./_components/HomeCarousel";
import FusionBlock from "./_components/FusionBlock";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BanniereRG from "@public/RG_screens_twitch_ethan.png";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div className="flex flex-col mb-8">
      <HomeCarousel />
      <div className="flex flex-col gap-8 px-4 mt-8">
        <FusionBlock isImageLeft={true} image={BanniereRG.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Qu'est-ce que Rose Griffon ?</h2>
            <p className="text-lg">
              Rose Griffon est une association française régie par la loi 1901,
              ayant pour vocation de rassembler les principaux acteurs de la
              communauté Inazuma Eleven ainsi que l’ensemble des passionnés sous
              une même bannière. Elle s’engage à valoriser à la fois la scène
              artistique liée à cette licence et son univers compétitif.
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
