export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer (static for now) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Structured Learning.
          <br />
          Real Projects.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Learn through carefully designed training paths built around
          real-world tasks and projects.
        </p>

        <div className="mt-10">
          <a
            href="/training"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-white text-sm font-medium hover:bg-gray-900 transition"
          >
            Explore Trainings
          </a>
        </div>
      </div>
    </section>
  );
}
