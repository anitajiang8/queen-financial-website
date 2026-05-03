import RegulatoryLinks from "@/components/RegulatoryLinks";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  const services = [
    {
      title: "Investment Services",
      description:
        "Investment solutions and guidance designed to support long-term financial goals.",
    },
    {
      title: "Insurance Planning",
      description:
        "Protection strategies for individuals, families, and businesses through insurance planning.",
    },
    {
      title: "Financial Planning",
      description:
        "Personalized support to help clients make informed financial decisions for the future.",
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            eyebrow="About Queen Financial"
            title="Professional financial services built around client goals."
            description="Queen Financial Group Inc. provides financial services across investment, insurance, and planning needs. The company is committed to professionalism, integrity, and long-term client value."
            align="left"
          />

          <div className="rounded-[2rem] border border-gray-200 bg-[#FDF8F2] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Our Mission
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
              Helping clients plan with clarity and confidence.
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              The redesign focuses on making Queen Financial&apos;s services
              easier to understand, easier to navigate, and easier to access
              across desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F8F7F3] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Services"
            title="Comprehensive financial solutions"
            description="Explore the main service areas Queen Financial provides to help clients protect, plan, and grow their financial future."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#7A1E1E] text-lg font-bold text-white">
                  QF
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6">
                  <ButtonLink href="#contact" variant="secondary">
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
            title="Latest news and company updates"
            description="A future section for financial resources, company announcements, and helpful updates for clients."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#C9A44C]">
                  Update {item}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0B1F3A]">
                  Resource title placeholder
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  This area can be used for news, announcements, or educational
                  financial content from Queen Financial.
                </p>
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
            <ButtonLink href="#contact" variant="light">
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