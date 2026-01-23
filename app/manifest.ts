export default function manifest() {
  return {
    name: "Rushi Butani - Frontend Developer",
    short_name: "Rushi Butani",
    description:
      "Frontend Web Developer specializing in React.js and modern web technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#1a202e",
    theme_color: "#2dd4bf",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
