import RegulatoryLinks from "@/components/RegulatoryLinks";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
 const services = [
    {
      title: "Financial Planning",
      description:
        "Customized financial guidance to help clients make informed decisions and work toward their financial goals.",
      href: "/services/financial-planning",
    },
    {
      title: "Investment Strategies",
      description:
        "One-step investment services for RRSP, Group RRSP, RESP, and regular investment accounts.",
      href: "/services/investment-strategies",
    },
    {
      title: "Insurance Solutions",
      description:
        "Insurance products and planning support to help clients protect themselves, their families, and their future.",
      href: "/services/insurance-solutions",
    },
  ];

  const advantages = [
    "Professional financial guidance",
    "Client-focused service",
    "Comprehensive financial solutions",
    "Trusted industry partners",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="about" className="bg-white px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <SectionTitle
          eyebrow="About Queen Financial"
          title="Professional financial services built around client goals."
          align="left"
        />

        <article className="mt-8 rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Our Mission
          </p>

          <h3 className="mt-4 text-2xl font-bold leading-snug text-[#0B1F3A]">
            Helping clients plan with clarity and confidence to achieve their
            financial goals.
          </h3>

          <p className="mt-5 leading-7 text-gray-600">
            Queen Financial Group Inc. (QFG) provides financial services across
            investments, insurance, and financial planning needs. The company is
            committed to professionalism, integrity, and long-term client value.
          </p>
        </article>
      </div>

      <div className="grid gap-5">
        <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            One-step investment services
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Queen Financial Group Inc. offers one-step investment services in
            RRSP, Group RRSP, RESP, and regular investment accounts, with
            thousands of mutual funds and exempt products available in the
            Canadian investment market for clients.
          </p>
        </article>

        <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            Trusted financial products
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Queen Financial Group Inc. offers extensive investment products from
            trusted financial institutions such as banks, fund companies, and
            insurance companies in North America.
          </p>
        </article>

        <article className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            Support for long-term goals
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            We&apos;re ready to help investors achieve various investment goals,
            from purchasing homes and cars, to dream vacations and securing a
            happy retirement.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

      <section id="services" className="bg-[#F8F7F3] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Services"
            title="One-step financial services with comprehensive financial products and solutions"
            description="We provide customized financial advice to help clients protect, plan, and grow their financial future."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6">
                  <ButtonLink href={service.href} variant="secondary">
                    Learn More
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-[#7A1E1E] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Clear guidance for important financial decisions.
            </h2>

            <p className="mt-4 leading-7 text-red-50">
              Queen Financial works to provide reliable support and practical
              solutions for clients at different stages of their financial
              journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-[#C9A44C]" />

                <h3 className="text-lg font-semibold text-[#0B1F3A]">
                  {advantage}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-[#F8F7F3] px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <SectionTitle
      eyebrow="Resources"
      title="Featured Video Resources"
      description="Watch selected video resources from Queen Financial Group to learn more about financial planning, investment strategies, insurance solutions, and company updates."
    />

    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {[
        {
          title: "Queen Financial Group",
          youtubeEmbedUrl: "https://www.youtube.com/embed/NaP8bdEEc5o?start=6",
        },
        {
          title: "Outstanding Chinese Canadian Entrepreneurs",
          youtubeEmbedUrl: "https://www.youtube.com/embed/EUTENYOcbtY",
        },
        {
          title: "Queen Financial Corporate Promotional Video",
          youtubeEmbedUrl: "https://www.youtube.com/embed/NbmQMyvFpBw",
        },
        {
          title: "About the Founder",
          youtubeEmbedUrl: "https://www.youtube.com/embed/s-xFkdU4vQQ",
        },
      ].map((video) => (
        <article key={video.title}>
          <h3 className="mb-5 text-center text-lg font-bold text-[#0B1F3A]">
            {video.title}
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="aspect-video">
              <iframe
                src={video.youtubeEmbedUrl}
                title={video.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0B1F3A] px-8 py-14 text-center text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Contact Queen Financial
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Ready to plan your financial future?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Speak with the Queen Financial team to learn more about investment,
            insurance, and financial planning services.
          </p>

          <div className="mt-8">
            <ButtonLink href="/book-consultation" variant="light">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>
      </section>

      <RegulatoryLinks />
      <Footer />
    </main>
  );
}