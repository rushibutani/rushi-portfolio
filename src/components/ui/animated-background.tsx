"use client";

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Primary top-left violet orb */}
      <div
        className="absolute -top-[15%] -left-[8%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] rounded-full opacity-[0.11] dark:opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, hsl(258 78% 62%), transparent 65%)",
          animation: "float-slow 22s ease-in-out infinite",
        }}
      />

      {/* Secondary bottom-right purple orb */}
      <div
        className="absolute -bottom-[18%] -right-[8%] w-[50vw] h-[50vw] max-w-[620px] max-h-[620px] rounded-full opacity-[0.08] dark:opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, hsl(280 65% 58%), transparent 65%)",
          animation: "float-slower 26s ease-in-out infinite reverse",
        }}
      />

      {/* Accent mid-right orb (dark mode accent) */}
      <div
        className="absolute top-[40%] -right-[15%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full opacity-0 dark:opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, hsl(258 70% 65%), transparent 60%)",
          animation: "float-reverse 30s ease-in-out infinite",
        }}
      />

      {/* Fine dot grid — light */}
      <div
        className="absolute inset-0 opacity-[0.022] dark:opacity-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(240 5% 20%) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Fine dot grid — dark */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.038]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(0 0% 90%) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 60%, hsl(240 8% 3% / 0.5) 100%)",
        }}
      />
    </div>
  );
}
