"use client";

export default function HorizonGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-indigo-50/40 via-transparent to-transparent" />
    </div>
  );
}
