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
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Insurance Business
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-gray-600">
              <p>
                Queen Financial Group supports clients with insurance planning
                designed to protect individuals, families, and businesses. Our
                services are built around practical guidance, trusted insurance
                products, and long-term financial security.
              </p>

              <p>
                Insurance planning can play an important role in a complete
                financial strategy by helping clients prepare for unexpected
                events, protect loved ones, and build confidence for the future.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Company Business Scope
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Queen Financial Group provides services across financial
                planning, tax planning, retirement funds, workers&apos; funds,
                life insurance, critical illness insurance, disability
                insurance, travel insurance, RESP, RRSP, segregated funds, and
                related financial solutions.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Insurance Products
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                We support clients with insurance products from trusted
                providers including AXA, Manulife, Sun Life, Canada Life, RBC
                Life, Standard Life, AIG, Equitable Life, Empire Life,
                Industrial Alliance, National Life, and more.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Protection for Every Stage
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Our insurance solutions are designed to help clients protect
                their income, family, health, travel plans, and long-term
                financial goals through clear and personalized planning support.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#7A1E1E] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Insurance Planning Focus
            </p>

            <p className="mt-4 leading-8 text-red-50">
              From life insurance and critical illness coverage to disability
              insurance, travel insurance, and segregated funds, Queen Financial
              Group helps clients explore protection strategies that support
              both present needs and future financial security.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}