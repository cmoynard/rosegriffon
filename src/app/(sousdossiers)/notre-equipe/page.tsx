"use client";

import React from "react";
import BoardMembersSection from "./_components/board";
import TeamsSection from "./_components/teams";

export default function NotreEquipe() {
  return (
    <div className="flex flex-col gap-16 px-4 py-8">
      {/* Section 1: Membres de l'association */}
      <BoardMembersSection />

      {/* Section 2: Équipes du projet */}
      <TeamsSection />
    </div>
  );
}
