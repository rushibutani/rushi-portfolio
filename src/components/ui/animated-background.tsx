"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Single subtle gradient */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, hsl(250 95% 65% / 0.15), transparent)`,
        }}
      />
    </div>
  );
}
