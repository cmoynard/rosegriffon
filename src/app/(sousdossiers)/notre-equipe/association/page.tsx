"use client";

import React, { Suspense } from "react";
import BoardMembersSection from "../_components/board";
import AssoMembersSection from "../_components/asso";
import { Skeleton } from "@/components/ui/skeleton";

export default function AssociationPage() {
  return (
    <main className="container mx-auto py-12 px-4 space-y-16">
      <Suspense fallback={<TeamSectionSkeleton />}>
        <BoardMembersSection />
      </Suspense>

      <Suspense fallback={<TeamSectionSkeleton />}>
        <AssoMembersSection />
      </Suspense>
    </main>
  );
}

function TeamSectionSkeleton() {
  return (
    <section className="flex flex-col gap-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-64 mx-auto bg-gray-400" />
        <Skeleton className="h-20 max-w-3xl mx-auto bg-gray-400" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[...Array(6)].map((_, index) => (
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
    </section>
  );
}
