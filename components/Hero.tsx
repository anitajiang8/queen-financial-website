import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FDF8F2] to-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Queen Financial Group Inc.
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
          Financial planning, investment, and insurance solutions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Queen Financial Group provides professional financial services to
            help individuals, families, and businesses plan with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">Book a Consultation</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-[#7A1E1E]">01</p>
              <p className="mt-1 text-sm text-gray-600">
                Professional guidance
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#7A1E1E]">02</p>
              <p className="mt-1 text-sm text-gray-600">
                Personalized solutions
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#7A1E1E]">03</p>
              <p className="mt-1 text-sm text-gray-600">
                Long-term planning
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
          <div className="rounded-[1.5rem] bg-[#7A1E1E] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Helping clients build a stronger financial future.
            </h2>

            <p className="mt-4 leading-7 text-red-50">
              We provide financial services across investment, insurance, and
              planning needs with a focus on professionalism, integrity, and
              client value.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Investment Services</p>
                <p className="mt-1 text-sm text-red-50">
                  Support for long-term financial goals.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Insurance Planning</p>
                <p className="mt-1 text-sm text-red-50">
                  Protection strategies for individuals and families.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Financial Planning</p>
                <p className="mt-1 text-sm text-red-50">
                  Clear guidance for future financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}