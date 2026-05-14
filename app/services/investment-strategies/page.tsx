import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function InvestmentStrategiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Investment Strategies
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Queen Financial Group provides one-step investment services designed
            to help clients build, protect, and grow long-term wealth. Our team
            offers access to a wide range of investment products and supports
            clients with clear guidance based on their financial goals.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Fund Investment Services
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-gray-600">
              <p>
                Queen Financial Group follows the service principles of
                professionalism, integrity, and value. The company is committed
                to continuously creating wealth for clients through
                comprehensive, one-step, high-quality financial services.
              </p>

              <p>
                In the North American financial sector, Queen Financial Group
                has built a strong reputation by actively serving clients and
                providing investment support tailored to a wide range of
                financial needs.
              </p>

              <p>
                In 2006, the company obtained approval from the Mutual Fund
                Dealers Association of Canada and the Ontario Securities
                Commission, acquiring its Canadian fund distribution license. The
                following year, it obtained Exempt Market Dealer qualification
                from the Ontario Securities Commission, allowing it to issue real
                estate investment trusts to the public.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Investment Account Options
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                We support clients with RRSP, Group RRSP, RESP, regular
                investment accounts, segregated funds, retirement funds, mutual
                funds, and other investment planning needs.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Broad Product Access
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Queen Financial Group distributes investment products from
                trusted financial institutions and fund companies, including
                Fidelity, Mackenzie, CI, AGF, Franklin Templeton, TD, Dynamic,
                RBC, BMO, and more.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Long-Term Wealth Goals
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Our investment services are designed to support goals such as
                purchasing a home, preparing for retirement, funding education,
                building wealth, and planning for future financial security.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#7A1E1E] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Company Business Scope
            </p>

            <p className="mt-4 leading-8 text-red-50">
              Queen Financial Group provides services across financial planning,
              tax planning, retirement funds, mutual funds, workers&apos; funds,
              life insurance, critical illness insurance, disability insurance,
              travel insurance, RESP, RRSP, segregated funds, mortgage
              referrals, and related financial solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}