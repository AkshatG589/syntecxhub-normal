"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>

          <p className="text-gray-600 mb-6">
            An unexpected error occurred. Please try again.
          </p>

          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
