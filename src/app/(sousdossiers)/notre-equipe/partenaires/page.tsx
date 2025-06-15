"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import getTeamMembers from "@/lib/get-team-members";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  index: number;
  link?: string;
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

export default function CollaborateursPage() {
  const { data: collaborateurs, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["collaborateurs"],
    queryFn: async () => {
      const response = await getTeamMembers("collabteam");
      console.log("Données des partenaires:", response);
      return response.map((member) => ({
        name: member.metadata.memberName,
        role: member.metadata.memberRole,
        index: member.metadata.memberIndex,
        link: member.metadata.memberLink || "",
        image: member.url,
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (anciennement cacheTime)
  });

  return (
    <main className="container mx-auto py-12 px-4">
      <section className="flex flex-col gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Nos partenaires</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les partenaires qui contribuent à enrichir l&apos;univers
            de Rose Griffon par leur expertise et leur créativité.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-4 w-64"
                >
                  <Skeleton className="w-36 h-36 rounded-full bg-gray-400" />
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-48 bg-gray-400" />
                    <Skeleton className="h-6 w-32 bg-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : collaborateurs && collaborateurs.length > 0 ? (
            collaborateurs
              .sort((a, b) => a.index - b.index)
              .map((member: TeamMember) => (
                <div
                  key={member.index}
                  className="flex flex-col items-center text-center gap-4 w-64"
                >
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-rose-500">
                    <ImageWithSkeleton
                      src={member.image || "https://placehold.co/200x200"}
                      alt={member.name + " Rose Griffon"}
                      priority={member.index < 3} // Charge en priorité les 3 premiers membres
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-xl text-rose-700">{member.role}</p>
                    {member.link && member.link.trim() !== "" && (
                      <Link href={member.link} className="hover:cursor-pointer">
                        <Button
                          variant="outline"
                          className="text-blue-600 mt-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
                        >
                          Visiter le site
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                Aucun collaborateur à afficher pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
