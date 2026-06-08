"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";

const heroSlides = [
  {
    title: "Financial Planning",
    subtitle: "Plan with clarity and confidence.",
    description:
      "Queen Financial Group helps clients make informed financial decisions and build a clear path toward their financial goals.",
    image: "/images/financial-planning.jpg",
  },
  {
    title: "Investment Strategies",
    subtitle: "Grow toward long-term goals.",
    description:
      "We offer investment services across RRSP, Group RRSP, RESP, and regular investment accounts with access to a wide range of financial products.",
    image: "/images/investment-services.jpg",
  },
  {
    title: "Insurance Solutions",
    subtitle: "Protect what matters most.",
    description:
      "Our insurance planning support helps individuals, families, and businesses prepare for the future with confidence.",
    image: "/images/insurance-planning.jpg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#0B1F3A]">
      <Image
        src={currentSlide.image}
        alt={`${currentSlide.title} image`}
        fill
        priority
        className="object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/70 to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
            Queen Financial Group Inc.
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            {currentSlide.title}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#FDF8F2] sm:text-3xl">
            {currentSlide.subtitle}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            {currentSlide.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-consultation" variant="light">
              Book a Consultation
            </ButtonLink>

            <ButtonLink href="#services" variant="light">
              Explore Services
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={goToPreviousSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1F3A]"
              aria-label="View previous slide"
            >
              ←
            </button>

            <div className="flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-10 bg-[#C9A44C]"
                      : "w-2.5 bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`View ${slide.title}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1F3A]"
              aria-label="View next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}