import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FinancialPlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Financial Planning
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Queen Financial Group provides customized financial guidance to help
            clients make informed decisions, understand their options, and work
            toward their personal financial goals.
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
              Goal-Based Planning
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Support for clients planning for major life goals such as buying a
              home, preparing for retirement, funding education, or building
              long-term financial security.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Clear Financial Guidance
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Personalized advice to help clients better understand their
              financial situation and make decisions with clarity and
              confidence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Long-Term Support
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Ongoing support to help clients adjust their plans as their needs,
              priorities, and financial goals change over time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}