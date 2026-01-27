"use client";

export default function DividerGlow() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute inset-x-0 top-0
        h-32
        flex justify-center
        overflow-hidden
      "
    >
      {/* Soft blue glow */}
      <div
        className="
          w-[70%] max-w-3xl
          h-full
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-blue-400/30
          to-transparent
          blur-3xl
        "
      />
    </div>
  );
}
