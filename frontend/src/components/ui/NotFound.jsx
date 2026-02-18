"use client"; // Required for the 'back' button functionality

import Link from "next/link";
import { useRouter } from "next/navigation";
import GridBackground from "@/components/ui/backgrounds/GridBackground";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound({ 
  code = "404",
  title = "Page Not Found",
  description = "The page you’re looking for doesn’t exist or may have been moved. Let’s get you back on track.",
  showHome = true,
  showBack = true,
  homeLink = "/",
}) {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 max-w-xl px-6 text-center">
        {/* Error Code */}
        <div className="text-8xl font-bold text-gray-800 select-none animate-pulse">
          {code}
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {showHome && (
            <Link
              href={homeLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gray-900 text-white font-medium transition-all hover:bg-black hover:shadow-lg active:scale-95"
            >
              <Home size={18} />
              Go to Home
            </Link>
          )}

          {showBack && (
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}