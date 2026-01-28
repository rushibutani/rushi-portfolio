"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Single premium gradient - subtle and confident */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 0%,
              hsl(239 84% 67% / 0.15),
              transparent
            )
          `,
        }}
      />

      {/* Subtle bottom gradient for depth */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 50% at 50% 100%,
              hsl(239 84% 67% / 0.1),
              transparent
            )
          `,
        }}
      />
    </div>
  );
}
