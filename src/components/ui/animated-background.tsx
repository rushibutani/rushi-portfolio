"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top-left violet orb */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.12] dark:opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, hsl(262 83% 60%), transparent 70%)",
          animation: "float-slow 18s ease-in-out infinite",
        }}
      />

      {/* Bottom-right violet orb */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full opacity-[0.10] dark:opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, hsl(280 70% 55%), transparent 70%)",
          animation: "float-slower 22s ease-in-out infinite reverse",
        }}
      />

      {/* Subtle center glow (dark only) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vw] max-w-[900px] rounded-full opacity-0 dark:opacity-[0.03]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(262 70% 65%), transparent 60%)",
        }}
      />

      {/* Fine dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
