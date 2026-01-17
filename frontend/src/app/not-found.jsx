import Link from "next/link";
import GridBackground from "@/components/ui/GridBackground";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 max-w-xl px-6 text-center">
        {/* Error Code */}
        <div className="text-8xl font-semibold text-gray-200 select-none">
          404
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-md
              bg-black text-white
              transition-all duration-300
              hover:bg-gray-900 hover:gap-3
            "
          >
            <Home size={18} />
            Go to Home
          </Link>

          <Link
            href="/"
            className="
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-md
    border border-gray-300
    text-gray-700
    transition-all duration-300
    hover:bg-gray-50 hover:border-gray-400
  "
          >
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
}
