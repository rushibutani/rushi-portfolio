import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rushi Butani - Frontend Developer",
    short_name: "Rushi Butani",
    description:
      "Frontend Web Developer specializing in React.js and modern web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#14151f",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
