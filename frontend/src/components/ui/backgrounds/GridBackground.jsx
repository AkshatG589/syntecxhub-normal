"use client";

export default function GridBackground({ variant = "default" }) {
  const gridOpacity = variant === "hero" ? 0.13 : 0.07;
  const gridSize = variant === "hero" ? 28 : 32;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base light background */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Grid */}
      <div
        className="absolute inset-0 animate-gridOscillate"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,${gridOpacity}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `
            linear-gradient(
              to bottom,
              black 0%,
              black 70%,
              rgba(0,0,0,0.4) 85%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(
              to bottom,
              black 0%,
              black 70%,
              rgba(0,0,0,0.4) 85%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Vertical QR-style scanner */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="qr-scan-container">
          <div className="qr-scan-line" />
          <div className="qr-scan-trail" />
        </div>
      </div>
    </div>
  );
}
