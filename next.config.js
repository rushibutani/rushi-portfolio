/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: "output: export" removed — it breaks the /api/contact route (Resend email).
  // The site should be deployed on Vercel (Node.js runtime) to support API routes.
  images: {
    // Enable Next.js image optimisation — serves WebP/AVIF automatically,
    // generates responsive srcsets, and lazy-loads off-screen images.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
