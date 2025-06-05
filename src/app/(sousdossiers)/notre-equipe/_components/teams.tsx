"use client";

import React from "react";
import Image from "next/image";

import KyotabaPP from "@public/pp/kyotaba.png";
import DleezPP from "@public/pp/dleez.png";
import KoltiPP from "@public/pp/kolti.png";
import EmioPP from "@public/pp/emio.png";
import InazoPP from "@public/pp/inazo.png";
import EthanPP from "@public/pp/ethan.png";
import AbouniniPP from "@public/pp/abounini.png";
import ClémentPP from "@public/pp/clement.jpg";
import TikanPP from "@public/pp/tikan.png";
import BrikoroPP from "@public/pp/brikoro.png";
import TanejPP from "@public/pp/tanej.png";
import HugofansubPP from "@public/pp/hugofansub.png";
import PlaticusPP from "@public/pp/platicus.png";
import GTDPP from "@public/pp/gtd.webp";
import VelictoPP from "@public/pp/velicto.png";
import KaruminasanPP from "@public/pp/karuminasan.png";
import ErwanchannelPP from "@public/pp/erwanchannel.png";
import JennScarletPP from "@public/pp/jennscarlet.png";
import JojokirinoPP from "@public/pp/jojokirino.png";
import MobuPP from "@public/pp/mobu.png";
import SuumashPP from "@public/pp/suumash.png";
import YaflinPP from "@public/pp/yaflin.png";
import YannoushowPP from "@public/pp/yannoushow.png";
import MohafubukiPP from "@public/pp/mohafubuki.png";
import y3lisePP from "@public/pp/elise.webp";
import YeggronPP from "@public/pp/yeggron.png";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type Team = {
  name: string;
  members: TeamMember[];
};

// Équipes du projet
const teams: Team[] = [
  {
    name: "Équipe Achilléa",
    members: [
      {
        name: "Aquiléa",
        role: "Scénariste",
        image: "https://placehold.co/200x200",
      },
      {
        name: "Aquiléa",
        role: "Scénariste",
        image: "https://placehold.co/200x200",
      },
      {
        name: "Aquiléa",
        role: "Scénariste",
        image: "https://placehold.co/200x200",
      },
      {
        name: "Aquiléa",
        role: "Scénariste",
        image: "https://placehold.co/200x200",
      },
    ],
  },
  {
    name: "Équipe Azalée",
    members: [
      {
        name: "Emio",
        role: "Cheffe de projet",
        image: EmioPP.src,
      },
      {
        name: "Velicto",
        role: "Community Manager",
        image: VelictoPP.src,
      },
      {
        name: "Inazo",
        role: "Rédacteur",
        image: InazoPP.src,
      },
    ],
  },
  {
    name: "Équipe Dessinateur",
    members: [
      {
        name: "Kyotaba",
        role: "Dessinatrice",
        image: KyotabaPP.src,
      },
      {
        name: "Dleez",
        role: "Dessinatrice",
        image: DleezPP.src,
      },
      {
        name: "FullCapsEthan",
        role: "Dessinateur",
        image: EthanPP.src,
      },
      {
        name: "Erwanchannel",
        role: "Dessinateur",
        image: ErwanchannelPP.src,
      },
      {
        name: "JennScarlet",
        role: "Dessinatrice",
        image: JennScarletPP.src,
      },
      {
        name: "Yaflin",
        role: "Dessinateur",
        image: YaflinPP.src,
      },
      {
        name: "y3lise",
        role: "Dessinatrice",
        image: y3lisePP.src,
      },
    ],
  },
  {
    name: "Équipe Lore",
    members: [
      {
        name: "Kyotaba",
        role: "Cheffe de projet",
        image: KyotabaPP.src,
      },
      {
        name: "Platicus",
        role: "Cheffe de projet",
        image: PlaticusPP.src,
      },
      {
        name: "Dleez",
        role: "Rédactrice",
        image: DleezPP.src,
      },
      {
        name: "Inazo",
        role: "Rédacteur",
        image: InazoPP.src,
      },
      {
        name: "JennScarlet",
        role: "Rédactrice",
        image: JennScarletPP.src,
      },
      {
        name: "Jojokirino",
        role: "Dessinateur",
        image: JojokirinoPP.src,
      },
      {
        name: "FullCapsEthan",
        role: "Charadesign",
        image: EthanPP.src,
      },
    ],
  },
  {
    name: "Équipe Réseaux",
    members: [
      {
        name: "Inazo",
        role: "Community Manager",
        image: InazoPP.src,
      },
      {
        name: "Velicto",
        role: "Community Manager",
        image: VelictoPP.src,
      },
      {
        name: "Karuminasan",
        role: "Community Manager",
        image: KaruminasanPP.src,
      },
      {
        name: "Brikoro",
        role: "Streamer",
        image: BrikoroPP.src,
      },
      {
        name: "Tanej",
        role: "Streamer",
        image: TanejPP.src,
      },
      {
        name: "Yannoushow",
        role: "Conseiller",
        image: YannoushowPP.src,
      },
      {
        name: "Mohafubuki",
        role: "Conseiller",
        image: MohafubukiPP.src,
      },
      {
        name: "Mobu",
        role: "Créateur de contenu",
        image: MobuPP.src,
      },
      {
        name: "Suumash",
        role: "Créateur de contenu",
        image: SuumashPP.src,
      },
    ],
  },
  {
    name: "Équipe Production",
    members: [
      {
        name: "Clément | Hellsaw",
        role: "Lead Developer",
        image: ClémentPP.src,
      },
      {
        name: "Tikan",
        role: "Developer",
        image: TikanPP.src,
      },
      {
        name: "Kyotaba",
        role: "Designeuse",
        image: KyotabaPP.src,
      },
      {
        name: "Yeggron",
        role: "Graphiste",
        image: YeggronPP.src,
      },
      {
        name: "Abounini",
        role: "Traducteur",
        image: AbouniniPP.src,
      },
      {
        name: "Hugofansub",
        role: "Traducteur",
        image: HugofansubPP.src,
      },
      {
        name: "GTD",
        role: "Traducteur",
        image: GTDPP.src,
      },
    ],
  },
];

export default function TeamsSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Nos Équipes</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Découvrez les talents qui donnent vie à l'univers de Rose Griffon.
          Notre équipe passionnée travaille ensemble pour créer des histoires
          captivantes et des illustrations magnifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {teams.map((team) => (
          <div key={team.name} className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-3xl font-bold mb-6">{team.name}</h2>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "https://placehold.co/200x200"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
