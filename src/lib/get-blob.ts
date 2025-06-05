"use server";

import { list } from "@vercel/blob";

async function getImageUrl(pathname: string) {
  const teamList = await list({
    prefix: "team/",
  });

  return teamList.blobs.find((blob) => blob.pathname === `team/${pathname}`)
    ?.url;
}

export default getImageUrl;
