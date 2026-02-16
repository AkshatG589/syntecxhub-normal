"use client";

export default function Error({ reset }) {
  return (
    <div className="text-center py-32">
      <h2 className="text-xl font-semibold">
        Something went wrong
      </h2>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-black text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
