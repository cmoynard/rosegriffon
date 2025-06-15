"use server";

import { createBucketClient } from "@cosmicjs/sdk";

export type TeamMemberResponse = {
  metadata: {
    memberName: string;
    memberRole: string;
    memberIndex: number;
    memberLink: string;
  };
  url: string;
};

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG!,
  readKey: process.env.COSMIC_READ_KEY!,
});

type ImageData = {
  media: TeamMemberResponse[];
  total: number;
};

/**
 * Fetches team members from Cosmic based on the team ID
 * @param teamId - ID of the team to fetch (e.g., "loreteam", "productionteam")
 * @returns Array of team members with their metadata and image URLs
 */
export default async function getTeamMembers(
  teamId: string
): Promise<TeamMemberResponse[]> {
  try {
    const imagesData: ImageData = await cosmic.media
      .find({
        folder: teamId,
      })
      .props(["url, metadata"]);

    // Sort by memberIndex if available
    return imagesData.media.sort(
      (a, b) =>
        (a.metadata.memberIndex || 999) - (b.metadata.memberIndex || 999)
    );
  } catch (error) {
    console.error(`Error fetching ${teamId} members:`, error);
    // Return empty array instead of throwing error
    return [];
  }
}
