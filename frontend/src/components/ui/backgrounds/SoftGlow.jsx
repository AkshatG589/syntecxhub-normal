export default function SoftGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft glow blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-indigo-200/20 blur-3xl" />
    </div>
  );
}
