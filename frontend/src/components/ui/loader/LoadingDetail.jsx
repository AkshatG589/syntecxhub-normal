// src/components/ui/loader/LoadingDetail.jsx
export default function LoadingDetail() {
  return (
    <div className="container mx-auto px-6 py-20 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          <div className="h-12 w-2/3 bg-gray-200 rounded-2xl" />
          <div className="h-64 w-full bg-gray-100 rounded-3xl" />
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
          </div>
        </div>

        {/* Sidebar Card */}
        <div className="w-full lg:w-80 h-[400px] border border-gray-100 rounded-3xl bg-white/50" />
      </div>
    </div>
  );
}