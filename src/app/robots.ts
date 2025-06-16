import { MetadataRoute } from "next";

// Définition du domaine du site
const baseUrl = "https://www.rosegriffon.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
