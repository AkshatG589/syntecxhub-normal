"use client";

export default function TrainingError({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Something went wrong
      </h2>

      <p className="mt-3 text-gray-600 max-w-md">
        We encountered an unexpected issue while loading training programs.
        Please try again.
      </p>

      <button
        onClick={reset}
        className="
          mt-6 px-5 py-2 rounded-lg
          bg-black text-white
          text-sm font-medium
          hover:bg-gray-900 transition
        "
      >
        Try again
      </button>
    </div>
  );
}
