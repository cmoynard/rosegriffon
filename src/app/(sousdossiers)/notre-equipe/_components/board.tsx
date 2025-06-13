"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import getTeamMembers from "@/lib/get-team-members";
import { Skeleton } from "@/components/ui/skeleton";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  index: number;
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
        alt={alt}
        fill
        className="object-cover"
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100px, 144px"
        quality={70}
      />
    </>
  );
}

export default function BoardMembersSection() {
  const { data: boardMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["board-members"],
    queryFn: async () => {
      const response = await getTeamMembers("assoteam");
      return response.map((member) => ({
        name: member.metadata.memberName,
        role: member.metadata.memberRole,
        index: member.metadata.memberIndex,
        image: member.url,
      }));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (anciennement cacheTime)
  });

  return (
    <section className="flex flex-col gap-8">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Bureau de l&apos;Association</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Les membres du bureau de l&apos;association Rose Griffon sont
          responsables de la gestion administrative, légale et financière du
          projet. Ils assurent le bon fonctionnement de l&apos;association et
          coordonnent les différentes équipes.
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
        ) : (
          boardMembers &&
          boardMembers
            .sort((a, b) => a.index - b.index)
            .map((member: TeamMember) => (
              <div
                key={member.index}
                className="flex flex-col items-center text-center gap-4 w-64"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-rose-500">
                  <ImageWithSkeleton
                    src={member.image || "https://placehold.co/200x200"}
                    alt={member.name}
                    priority={member.index < 3} // Charge en priorité les 3 premiers membres
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-xl text-rose-700">{member.role}</p>
                </div>
              </div>
            ))
        )}
      </div>
    </section>
  );
}
