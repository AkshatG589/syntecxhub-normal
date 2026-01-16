export default function DomainsPreview() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold">Training Domains</h2>
        <p className="mt-4 text-gray-600 max-w-xl">
          Explore structured learning domains designed for depth and clarity.
        </p>

        <div className="mt-12 space-y-6">
          {/* Placeholder – will be dynamic later */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium">Web Development</h3>
            <p className="text-gray-600 text-sm">
              Frontend, backend, and full-stack learning paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
