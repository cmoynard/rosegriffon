"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import getTeamMembers from "@/lib/get-team-members";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type Team = {
  name: string;
  members: TeamMember[];
};

// Image component with skeleton loader
function ImageWithSkeleton({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-full" />
      )}
      <Image
        src={src}
        alt={alt + " Rose Griffon"}
        fill
        className="object-cover"
        onLoad={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100px, 144px"
        quality={70}
      />
    </>
  );
}

export default function TeamsSection() {
  const { data: teams, isLoading } = useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: async () => {
      // Map team IDs to display names
      const teamConfig: Record<string, string> = {
        loreteam: "Équipe Lore",
        dessinateurteam: "Équipe Dessinateur",
        productionteam: "Équipe Production",
        socialteam: "Équipe Réseaux",
        achilleateam: "Équipe Achilléa",
        azaleeteam: "Équipe Azalée",
      };

      const teamIds = Object.keys(teamConfig);

      const teamsData = await Promise.all(
        teamIds.map(async (teamId) => {
          try {
            const members = await getTeamMembers(teamId);

            return {
              name: teamConfig[teamId],
              members: members.map((member) => ({
                name: member.metadata.memberName,
                role: member.metadata.memberRole,
                image: member.url,
              })),
            };
          } catch (error) {
            console.error(`Error processing team ${teamId}:`, error);
            // Return team with empty members array
            return {
              name: teamConfig[teamId],
              members: [],
            };
          }
        })
      );

      // Filter out teams with no members
      return teamsData.filter((team) => team.members.length > 0);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (anciennement cacheTime)
  });

  return (
    <section className="flex flex-col gap-8">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Nos Équipes</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Découvrez les talents qui donnent vie à l&apos;univers de Rose
          Griffon. Notre équipe passionnée travaille ensemble pour créer des
          histoires captivantes et des illustrations magnifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {isLoading ? (
          // Loading skeletons
          [...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <Skeleton className="h-10 w-48 mb-6 bg-gray-400" />
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(4)].map((_, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Skeleton className="w-24 h-24 rounded-full bg-gray-400" />
                    <div>
                      <Skeleton className="h-6 w-24 bg-gray-400" />
                      <Skeleton className="h-4 w-20 bg-gray-400 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : teams && teams.length > 0 ? (
          teams.map((team) => (
            <div key={team.name} className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-6">{team.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {team.members.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <ImageWithSkeleton
                        src={member.image || "https://placehold.co/200x200"}
                        alt={member.name + " Rose Griffon"}
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
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-500">
              Aucune équipe à afficher pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
