"use server";

import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

export type CarouselData = {
  metadata: {
    title: string;
    href: string;
  };
  url: string;
};

type ImageData = {
  media: CarouselData[];
  total: number;
};

async function getCarouselImages() {
  const imagesData: ImageData = await cosmic.media
    .find({
      folder: "landingcarousel",
    })
    .props(["url, metadata"]);

  return imagesData.media;
}

export default getCarouselImages;
