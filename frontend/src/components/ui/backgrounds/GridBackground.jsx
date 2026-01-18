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
          maskImage:
            "radial-gradient(circle at center, black 65%, transparent 100%)",
        }}
      />

      {/* Vertical QR-style scanner */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="qr-scan-container">
          
           {/* Sharp scan line */}
          <div className="qr-scan-line" />
          
          {/* Color trail */}
          <div className="qr-scan-trail" />

        </div>
      </div>
    </div>
  );
}
