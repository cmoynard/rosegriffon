"use client";

import React from "react";
import HomeCarousel from "./_components/HomeCarousel";
import FusionBlock from "./_components/FusionBlock";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div className="flex flex-col mb-8">
      <HomeCarousel />
      <div className="flex flex-col gap-8 px-4 mt-8">
        <FusionBlock isImageLeft={true}>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Titre de la section</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </FusionBlock>
        <FusionBlock isImageLeft={false}>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Titre de la section</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </FusionBlock>
      </div>
    </div>
  );
}
