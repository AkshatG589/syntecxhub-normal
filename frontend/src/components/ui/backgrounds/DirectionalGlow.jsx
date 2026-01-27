"use client";

export default function DirectionalGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/30 via-transparent to-pink-100/30" />
    </div>
  );
}
