import React from "react";
import Image from "next/image";

type FusionBlockProps = {
  isImageLeft: boolean;
  image?: string;
  children: React.ReactNode;
};

export default function FusionBlock({
  isImageLeft,
  image,
  children,
}: FusionBlockProps) {
  const imageUrl = image || "https://placehold.co/600x400";

  return (
    <div className="flex w-full h-[400px]">
      {isImageLeft ? (
        <>
          <div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Description"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-r-3xl">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-l-3xl shadow-lg">
            {children}
          </div>
          <div className="w-1/2 h-full rounded-r-3xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Description"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
}
