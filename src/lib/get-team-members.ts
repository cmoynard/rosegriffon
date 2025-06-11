"use server";

import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

type ImageData = {
  media: TeamMember[];
  total: number;
};

type TeamMember = {
  metadata: {
    memberName: string;
    memberRole: string;
    memberIndex: number;
  };
  url: string;
};

async function getTeamMembers(teamName: string) {
  const imagesData: ImageData = await cosmic.media
    .find({
      folder: teamName,
    })
    .props(["url, metadata"]);

  return imagesData.media;
}

export default getTeamMembers;
