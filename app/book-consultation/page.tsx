import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#FDF8F2] to-white px-6 pb-10 pt-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Book a Consultation
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Request a consultation with Queen Financial.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Complete the form below and the Queen Financial team will contact
            you using the information provided.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-5xl">
          <ConsultationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}