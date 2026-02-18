"use client";

import { useEffect } from "react";
import GridBackground from "@/components/ui/backgrounds/GridBackground";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorState({ 
  error, 
  reset, 
  title = "Something went wrong!",
  description = "An unexpected error occurred. Our team has been notified.",
  showHome = true 
}) {
  
  useEffect(() => {
    // Log the error to an error reporting service (Sentry, Logtail, etc.)
    console.error("Global Error Boundary:", error);
  }, [error]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <GridBackground />
      
      <div className="relative z-10 max-w-xl px-6 text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600 italic">
          &ldquo;{error?.message || description}&rdquo;
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Reset Button - Tries to re-render the segment */}
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gray-900 text-white font-medium transition-all hover:bg-black active:scale-95"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>

          {showHome && (
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium transition-all hover:bg-gray-50 active:scale-95"
            >
              <Home size={18} />
              Return Home
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}