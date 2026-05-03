import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#C9A44C]">
          Queen Financial Group Inc.
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl md:text-6xl">
          Financial planning, investment, and insurance solutions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Queen Financial Group provides professional financial services to help
          individuals, families, and businesses plan with confidence.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-[#0B1F3A] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#12345f]"
          >
            Book a Consultation
          </a>

          <a
            href="#services"
            className="rounded-full border border-[#0B1F3A] px-6 py-3 text-center text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
          >
            Explore Services
          </a>
        </div>
      </section>
    </main>
  );
}