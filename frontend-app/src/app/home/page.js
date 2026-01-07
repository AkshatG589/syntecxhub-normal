export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Welcome to <span className="text-indigo-400">SyntecxHub</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300">
          We are building something powerful and innovative.
        </p>

        <p className="mt-2 text-base md:text-lg text-slate-400">
          The site will be live very soon.
        </p>

        <div className="mt-10 flex justify-center">
          <span className="inline-block rounded-full bg-indigo-500/10 px-6 py-3 text-indigo-300 text-sm font-medium border border-indigo-500/30">
            Stay Tuned
          </span>
        </div>
      </div>
    </main>
  );
}
