"use client";

import React from "react";
import Image from "next/image";
import FusionBlock from "../../_components/FusionBlock";
import KyotabaPP from "@public/pp/kyotaba.png";
import DleezPP from "@public/pp/dleez.png";
import KoltiPP from "@public/pp/kolti.png";
import EmioPP from "@public/pp/emio.png";
import InazoPP from "@public/pp/inazo.png";
import EthanPP from "@public/pp/ethan.png";
import AbouniniPP from "@public/pp/abounini.png";
import ClémentPP from "@public/pp/clement.jpg";
import TikanPP from "@public/pp/tikan.png";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type Team = {
  name: string;
  members: TeamMember[];
};

// Membres du bureau de l'association
const boardMembers: TeamMember[] = [
  {
    name: "Benjamin | KoltiLasko",
    role: "Président",
    image: KoltiPP.src,
  },
  {
    name: "Marie | Emio",
    role: "Vice-présidente",
    image: EmioPP.src,
  },
  {
    name: "Lise | Dleez",
    role: "Vice-présidente",
    image: DleezPP.src,
  },
  {
    name: "Ethan | FullCapsEthan",
    role: "Secrétaire",
    image: EthanPP.src,
  },
  {
    name: "Noa | Inazo",
    role: "Trésorier",
    image: InazoPP.src,
  },
];

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
        name: "Marie | Emio",
        role: "Cheffe de projet",
        image: EmioPP.src,
      },
      {
        name: "Noa | Inazo",
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
        name: "Lise | Dleez",
        role: "Dessinatrice",
        image: DleezPP.src,
      },
      {
        name: "Ethan | FullCapsEthan",
        role: "Dessinateur",
        image: EthanPP.src,
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
        name: "Lise | Dleez",
        role: "Rédactrice",
        image: DleezPP.src,
      },
      {
        name: "Noa | Inazo",
        role: "Rédacteur",
        image: InazoPP.src,
      },
      {
        name: "Ethan | FullCapsEthan",
        role: "Charadesign",
        image: EthanPP.src,
      },
    ],
  },
  {
    name: "Équipe Réseaux",
    members: [
      {
        name: "Noa | Inazo",
        role: "Community Manager",
        image: InazoPP.src,
      },
      {
        name: "Abounini",
        role: "Traducteur",
        image: AbouniniPP.src,
      },
    ],
  },
  {
    name: "Équipe Développement",
    members: [
      {
        name: "Clément",
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
    ],
  },
];

export default function NotreEquipe() {
  return (
    <div className="flex flex-col gap-16 px-4 py-8">
      {/* Section 1: Membres de l'association */}
      <section className="flex flex-col gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Bureau de l'Association</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Les membres du bureau de l'association Rose Griffon sont
            responsables de la gestion administrative, légale et financière du
            projet. Ils assurent le bon fonctionnement de l'association et
            coordonnent les différentes équipes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center gap-4 w-64"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-rose-500">
                <Image
                  src={member.image || "https://placehold.co/200x200"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-xl text-rose-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Équipes du projet */}
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
    </div>
  );
}
