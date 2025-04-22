"use client";

import React from "react";
import Image from "next/image";
import FusionBlock from "../../_components/FusionBlock";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type Team = {
  name: string;
  members: TeamMember[];
};

const teams: Team[] = [
  {
    name: "Équipe Aquiléa",
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
        name: "Azalée",
        role: "Scénariste",
        image: "https://placehold.co/200x200",
      },
    ],
  },
  {
    name: " Équipe Dessinateur",
    members: [
      {
        name: "Dessinateur",
        role: "Dessinateur",
        image: "https://placehold.co/200x200",
      },
    ],
  },
  {
    name: "Équipe Réseaux",
    members: [
      {
        name: "CM",
        role: "Community Manager",
        image: "https://placehold.co/200x200",
      },
    ],
  },
  {
    name: "Équipe Développement",
    members: [
      {
        name: "Clément",
        role: "Lead Developer",
        image: "https://placehold.co/200x200",
      },
      {
        name: "Tikan",
        role: "Developer",
        image: "https://placehold.co/200x200",
      },
      {
        name: "Kyotaba",
        role: "Designer",
        image: "https://placehold.co/200x200",
      },
    ],
  },
];

export default function NotreEquipe() {
  return (
    <div className="flex flex-col gap-12 px-4 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Notre Équipe</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Découvrez les talents qui donnent vie à l'univers de Rose Griffon.
          Notre équipe passionnée travaille ensemble pour créer des histoires
          captivantes et des illustrations magnifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
}
