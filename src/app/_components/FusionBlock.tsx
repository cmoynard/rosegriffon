import React from "react";
import Image from "next/image";

type FusionBlockProps = {
  isImageLeft: boolean;
  image?: string;
  children: React.ReactNode;
  imageStyle?: React.CSSProperties;
  imageOverlay?: React.ReactNode;
};

export default function FusionBlock({
  isImageLeft,
  image,
  children,
  imageStyle,
  imageOverlay,
}: FusionBlockProps) {
  const imageUrl = image || "https://placehold.co/600x400";

  return (
    <div className="flex w-full h-[400px]">
      {isImageLeft ? (
        <>
          <div className="w-1/2 h-full rounded-l-3xl overflow-hidden relative shadow-lg">
            <Image
              src={imageUrl}
              alt="Description"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              style={imageStyle}
            />
            {imageOverlay && (
              <div className="absolute inset-0 flex items-center justify-center">
                {imageOverlay}
              </div>
            )}
          </div>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-r-3xl shadow-lg">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-l-3xl shadow-lg">
            {children}
          </div>
          <div className="w-1/2 h-full rounded-r-3xl overflow-hidden relative shadow-lg">
            <Image
              src={imageUrl}
              alt="Description"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              style={imageStyle}
            />
            {imageOverlay && (
              <div className="absolute inset-0 flex items-center justify-center">
                {imageOverlay}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
