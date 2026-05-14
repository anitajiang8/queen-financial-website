import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function InsuranceSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Insurance Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Queen Financial Group provides insurance products and planning
            support to help clients protect themselves, their families, and
            their future with confidence.
          </p>

          <div className="mt-8">
            <ButtonLink href="/#contact">Book a Consultation</ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Personal Protection
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Insurance planning support designed to help individuals and
              families prepare for unexpected events and protect what matters
              most.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Family Security
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Guidance to help clients consider protection strategies that
              support family stability, future planning, and long-term peace of
              mind.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Planning Confidence
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Insurance solutions that can work alongside financial planning and
              investment strategies to create a more complete financial plan.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}