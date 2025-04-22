"use client";

import React from "react";
import HomeCarousel from "./_components/HomeCarousel";
import FusionBlock from "./_components/FusionBlock";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BanniereRG from "@public/RG_screens_twitch_ethan.png";
import BanniereAzalee from "@public/Azalée 2.png";
import BanniereAchillea from "@public/achillea.png";

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

        <FusionBlock isImageLeft={false} image={BanniereAzalee.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Azalée | Média Inazuma Eleven
            </h2>
            <p className="text-lg">
              Azalée est un média dédié à l’univers d’Inazuma Eleven,
              appartenant à l’association Rose Griffon. Son objectif est de
              fournir une information en temps réel sur l’actualité de la
              licence, avec la plus grande rigueur journalistique. Présente sur
              plusieurs réseaux sociaux, Azalée veille à offrir une couverture
              complète, fiable et accessible à tous les passionnés.
            </p>
          </div>
        </FusionBlock>
        <FusionBlock isImageLeft={true} image={BanniereAchillea.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Achilléa | Scène compétitive Inazuma Eleven
            </h2>
            <p className="text-lg">
              Achilléa est la branche e-sport de Rose Griffon, dédiée à la scène
              compétitive d’Inazuma Eleven: Victory Road. Elle a pour mission de
              structurer la compétition de haut niveau autour du jeu, à travers
              des projets ambitieux, et de faire briller les talents de la
              communauté.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://twitter.com/AchilleaIE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-full hover:bg-[#1a8cd8] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </a>
              <a
                href="https://discord.gg/achillea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#5865F2] text-white px-4 py-2 rounded-full hover:bg-[#4752C4] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </a>
              <a
                href="https://twitch.tv/AchilleaIE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#9146FF] text-white px-4 py-2 rounded-full hover:bg-[#7B3FE4] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
                Twitch
              </a>
            </div>
          </div>
        </FusionBlock>
      </div>
    </div>
  );
}
