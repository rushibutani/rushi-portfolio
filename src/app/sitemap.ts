import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.rushibutani.me";
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
