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
    <div className="flex flex-col lg:flex-row w-full lg:h-[400px]">
      {isImageLeft ? (
        <>
          <div className="w-full lg:w-1/2 h-[300px] lg:h-full rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl overflow-hidden relative shadow-lg">
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
          <div className="w-full lg:w-1/2 bg-white p-6 lg:p-8 flex items-center rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl shadow-lg">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 h-[300px] lg:h-full order-1 lg:order-2 rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl overflow-hidden relative shadow-lg">
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
          <div className="w-full lg:w-1/2 order-2 lg:order-1 bg-white p-6 lg:p-8 flex items-center rounded-b-3xl lg:rounded-b-none lg:rounded-l-3xl shadow-lg">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
