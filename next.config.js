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
  async headers() {
    // Content-Security-Policy:
    //   - script-src needs 'unsafe-inline' because Next.js injects inline scripts
    //     for RSC payload streaming and hydration. A nonce-based approach would
    //     require a custom middleware and is tracked for a future improvement.
    //   - style-src 'unsafe-inline' is required by emotion / Tailwind runtime styles.
    const ContentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Fixes: "No CSP found in enforcement mode" (High)
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          // Fixes: "No COOP header found" (High)
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // Fixes: Missing includeSubDomains + preload (Medium x2)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
