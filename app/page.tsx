import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Our Services"
          title="Comprehensive financial solutions"
          description="Queen Financial Group provides professional services across investment, insurance, and financial planning."
        />
      </section>

      <Footer />
    </main>
  );
}