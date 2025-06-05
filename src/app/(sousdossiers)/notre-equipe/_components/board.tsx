"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import getTeamMembers from "@/lib/get-team-members";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export default function BoardMembersSection() {
  const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);

  const boardMembersMutation = useMutation({
    mutationFn: async () => {
      const response = await getTeamMembers("assoteam");
      return response.map((member) => ({
        name: member.metadata.memberName,
        role: member.metadata.memberRole,
        image: member.url,
      }));
    },
    onSuccess: (data) => {
      setBoardMembers(data);
    },
  });

  useEffect(() => {
    boardMembersMutation.mutate();
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold">Bureau de l'Association</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Les membres du bureau de l'association Rose Griffon sont responsables
          de la gestion administrative, légale et financière du projet. Ils
          assurent le bon fonctionnement de l'association et coordonnent les
          différentes équipes.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {boardMembersMutation.isPending ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
          </div>
        ) : (
          boardMembers.map((member) => (
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
          ))
        )}
      </div>
    </section>
  );
}
