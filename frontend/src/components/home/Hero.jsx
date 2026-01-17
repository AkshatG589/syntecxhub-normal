import GridBackground from "@/components/ui/GridBackground";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <GridBackground variant="hero" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Learn Skills That
          <br />
          Actually Matter
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Structured training paths, real-world projects, and
          industry-aligned learning — all in one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/training"
            className="px-7 py-3 rounded-md bg-black text-white hover:bg-gray-900 transition"
          >
            Explore Trainings
          </Link>

          <Link
            href="/about"
            className="px-7 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition"
          >
            How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
