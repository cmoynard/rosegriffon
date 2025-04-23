"use client";

import React, { useEffect, useState } from "react";
import HomeCarousel from "./_components/HomeCarousel";
import FusionBlock from "./_components/FusionBlock";
import DiscordBlock from "./_components/DiscordBlock";
import LogoRG from "../../public/logo-rg-vide-mais-blanc.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BanniereRG from "@public/RG_screens_twitch_ethan.png";
import BanniereAzalee from "@public/Azalée 2.png";
import BanniereAchillea from "@public/achillea.png";
import BanniereTwitter from "@public/RG_screens_twitch_ethan.png";
import BanniereTiktok from "@public/RG_screens_twitch_ethan.png";
import BanniereDiscord from "@public/RG_screens_twitch_ethan.png";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const [tiktokData, setTiktokData] = useState<any>(null);

  // Récupération des données TikTok
  useEffect(() => {
    const fetchTiktokData = async () => {
      try {
        // Remplacer par l'URL réelle de l'API TikTok
        const response = await fetch("/api/tiktok-latest");
        const data = await response.json();
        setTiktokData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données TikTok:",
          error
        );
      }
    };

    fetchTiktokData();
  }, []);

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
              communauté Inazuma Eleven ainsi que l'ensemble des passionnés sous
              une même bannière. Elle s'engage à valoriser à la fois la scène
              artistique liée à cette licence et son univers compétitif.
            </p>
          </div>
        </FusionBlock>

        {/* Section des réseaux sociaux */}
        <div className="flex text-6xl font-bold items-center gap-2">
          <Image
            src={LogoRG}
            alt="Rose Griffon Logo"
            height={128}
            width={128}
          />
          Nos réseaux sociaux
        </div>

        {/* Twitter/X */}
        <FusionBlock isImageLeft={false} image={BanniereTwitter.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Twitter | Suivez notre actualité
            </h2>
            <p className="text-lg">
              Restez informés des dernières actualités et annonces de Rose
              Griffon en nous suivant sur Twitter. Partagez notre contenu et
              rejoignez la conversation avec notre communauté.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://twitter.com/rosegriffonFR"
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
                Suivre @rosegriffonFR
              </a>
            </div>
          </div>
        </FusionBlock>

        {/* TikTok */}
        <FusionBlock isImageLeft={true} image={BanniereTiktok.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">TikTok | Suivez nos vidéos</h2>
            <p className="text-lg">
              Découvrez notre contenu court et dynamique sur TikTok. Des moments
              forts de nos événements, des coulisses de l'association et bien
              plus encore.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.tiktok.com/@rosegriffon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#000000] text-white px-4 py-2 rounded-full hover:bg-[#333333] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                Suivre @rosegriffon
              </a>
            </div>
            {tiktokData && (
              <div className="mt-4">
                <p className="text-sm font-medium">Notre dernière vidéo :</p>
                <div className="mt-2 border rounded-lg overflow-hidden">
                  {tiktokData.success ? (
                    <div>
                      <div className="p-2">
                        <p className="font-medium truncate">
                          {tiktokData.latest_video.description}
                        </p>
                        <div className="text-sm text-gray-500 flex gap-4 mt-1">
                          <span>❤️ {tiktokData.latest_video.likes}</span>
                          <span>💬 {tiktokData.latest_video.comments}</span>
                          <span>👁️ {tiktokData.latest_video.views}</span>
                        </div>
                      </div>
                      <div className="mt-2 p-2 flex justify-center">
                        <a
                          href={tiktokData.latest_video.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#000000] text-white px-4 py-2 rounded-full hover:bg-[#333333] transition-colors flex items-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                          Voir la vidéo sur TikTok
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm p-2">
                      Impossible de charger la dernière vidéo TikTok
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </FusionBlock>

        {/* Discord */}
        <DiscordBlock serverId="1072991720268111892">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Discord | Rejoignez notre communauté
            </h2>
            <p className="text-lg">
              Rejoignez notre serveur Discord pour discuter avec la communauté
              Rose Griffon, participer à nos événements et rester informé de
              toutes nos actualités en temps réel.
            </p>
          </div>
        </DiscordBlock>

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
              Azalée est un média dédié à l'univers d'Inazuma Eleven,
              appartenant à l'association Rose Griffon. Son objectif est de
              fournir une information en temps réel sur l'actualité de la
              licence, avec la plus grande rigueur journalistique. Présente sur
              plusieurs réseaux sociaux, Azalée veille à offrir une couverture
              complète, fiable et accessible à tous les passionnés.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://twitter.com/AzaleeIE"
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
                href="https://azalee.rosegriffon.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#6B7280] text-white px-4 py-2 rounded-full hover:bg-[#4B5563] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                </svg>
                Site web
              </a>
            </div>
          </div>
        </FusionBlock>
        <FusionBlock isImageLeft={true} image={BanniereAchillea.src}>
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Achilléa | Scène compétitive Inazuma Eleven
            </h2>
            <p className="text-lg">
              Achilléa est la branche e-sport de Rose Griffon, dédiée à la scène
              compétitive d'Inazuma Eleven: Victory Road. Elle a pour mission de
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
