import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function InvestmentStrategiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Investment Strategies
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Queen Financial Group offers one-step investment services in RRSP,
            Group RRSP, RESP, and regular investment accounts, with access to
            thousands of mutual funds and exempt products available in the
            Canadian investment market.
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
              Account Options
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Investment support for RRSP, Group RRSP, RESP, and regular
              investment accounts based on each client&apos;s needs and goals.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Product Access
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Access to extensive investment products from trusted financial
              institutions, including banks, fund companies, and insurance
              companies in North America.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Future-Focused Goals
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Investment planning support for goals such as purchasing homes and
              cars, taking dream vacations, and securing a happy retirement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}