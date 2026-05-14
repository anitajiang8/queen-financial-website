import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FinancialPlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Financial Planning
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Queen Financial Group provides personalized financial planning
            support to help clients understand their options, manage their
            financial decisions, and work toward long-term goals with clarity
            and confidence.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Mutual Funds and Financial Planning
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-gray-600">
              <p>
                A mutual fund pools money from many investors and is managed by
                a professional investment manager from a fund company. This
                allows investors to access diversified investment opportunities
                across different asset classes. The mutual fund units purchased
                by investors represent their share in the fund&apos;s investment
                portfolio.
              </p>

              <p>
                Mutual funds can help investors participate in professionally
                managed portfolios while spreading investment exposure across a
                range of securities. This can make investing more accessible for
                clients who want structured support and diversified options.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Ways to Earn Returns
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Mutual funds may generate returns through interest income,
                dividend income, and capital appreciation when the value of the
                fund&apos;s underlying investments increases.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Advantages of Mutual Funds
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Mutual funds can offer lower risk through diversification, ease
                of investment, professional management, and access to a wide
                range of investment options in a regulated market.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Trusted Investment Partners
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Queen Financial Group works with many leading financial
                institutions in the investment market, including Fidelity,
                Manulife, Mackenzie, TD, BMO, and other trusted providers.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Comprehensive Financial Planning
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-gray-600">
              <p>
                Comprehensive financial planning helps clients view their
                financial decisions as part of a larger picture. It connects
                investment planning, asset management, risk tolerance, life
                goals, and future needs into a more complete plan.
              </p>

              <p>
                By understanding each client&apos;s financial situation,
                preferences, and risk tolerance, suitable planning tools and
                strategies can be tailored to help clients work toward their
                goals. This approach can make money management more convenient
                and help clients understand how financial decisions affect
                different areas of life.
              </p>

              <p>
                Queen Financial Group offers one-stop financial planning
                services supported by experienced investment advisors and years
                of industry experience. The team helps clients create
                personalized financial plans and make timely adjustments as
                market conditions and personal circumstances change.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Convenient Money Management
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Comprehensive planning helps clients organize financial
                decisions more clearly and understand how each choice connects
                to other areas of their financial life.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Short-Term and Long-Term Goals
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Viewing each financial decision as part of a larger plan helps
                clients consider both immediate needs and long-term life goals.
              </p>
            </article>

            <article className="rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-7 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                Professional Advisor Support
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Professional advisors can help clients build asset allocation
                strategies, respond to market changes, and manage investment
                risks with the client&apos;s interests as the primary goal.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#7A1E1E] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Client-Focused Planning
            </p>

            <p className="mt-4 leading-8 text-red-50">
              Queen Financial Group helps clients build personalized financial
              plans based on their situation, goals, and risk preferences. As
              circumstances and markets change, the team works to make timely
              adjustments and safeguard clients&apos; interests.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}