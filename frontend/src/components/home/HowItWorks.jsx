export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold">How Learning Works</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-12">
        <div>
          <span className="text-sm text-gray-500">01</span>
          <h3 className="mt-2 font-medium">Choose a Domain</h3>
        </div>

        <div>
          <span className="text-sm text-gray-500">02</span>
          <h3 className="mt-2 font-medium">Follow the Path</h3>
        </div>

        <div>
          <span className="text-sm text-gray-500">03</span>
          <h3 className="mt-2 font-medium">Build Projects</h3>
        </div>
      </div>
    </section>
  );
}
