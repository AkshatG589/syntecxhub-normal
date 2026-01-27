import Link from "next/link";

export default function TrainingNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Training content not found
      </h2>

      <p className="mt-3 text-gray-600 max-w-md">
        The training program you are looking for does not exist or has been
        removed.
      </p>

      <Link
        href="/training"
        className="
          mt-6 px-5 py-2 rounded-lg
          bg-black text-white
          text-sm font-medium
          hover:bg-gray-900 transition
        "
      >
        Back to Training Programs
      </Link>
    </div>
  );
}
