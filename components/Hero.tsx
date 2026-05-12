"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

const focusSlides = [
  {
    number: "01",
    title: "Professional Guidance",
    service: "Financial Planning",
    description:
      "Clear financial guidance to help clients make informed decisions for their future.",
    image: "/images/financial-planning.jpg",
  },
  {
    number: "02",
    title: "Long-Term Planning",
    service: "Investment Strategies",
    description:
      "Investment solutions and planning support designed to support long-term financial goals.",
    image: "/images/investment-services.jpg",
  },
  {
    number: "03",
    title: "Personalized Solutions",
    service: "Insurance Solutions",
    description:
      "Protection strategies designed around individual, family, and business needs.",
    image: "/images/insurance-planning.jpg",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = focusSlides[activeSlide];

  const goToPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? focusSlides.length - 1 : current - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) =>
      current === focusSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[#FDF8F2] to-white">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Queen Financial Group Inc.
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              Financial planning, investment strategies, and insurance
              solutions.
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
                We provide financial services across investments, insurance, and
                planning needs with a focus on professionalism, integrity, and client
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
                Service Overview
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
                Guidance, solutions, and planning for every stage.
              </h2>

              <div className="mt-8 grid gap-4">
                {focusSlides.map((slide, index) => (
                  <button
                    key={slide.number}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      activeSlide === index
                        ? "border-[#C9A44C] bg-[#FDF8F2] shadow-sm"
                        : "border-gray-200 bg-white hover:border-[#C9A44C] hover:bg-[#FDF8F2]"
                    }`}
                    aria-label={`View ${slide.title}`}
                  >
                    <div className="flex gap-4">
                      <p className="text-2xl font-bold text-[#7A1E1E]">
                        {slide.number}
                      </p>

                      <div>
                        <h3 className="font-bold text-[#0B1F3A]">
                          {slide.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-gray-700">
                          {slide.service}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#FDF8F2]">
              <div className="relative h-72 sm:h-96">
                <Image
                  src={currentSlide.image}
                  alt={`${currentSlide.service} visual`}
                  fill
                  className="object-cover"
                />

                <button
                  type="button"
                  onClick={goToPreviousSlide}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0B1F3A] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:ring-offset-2"
                  aria-label="View previous service"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={goToNextSlide}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0B1F3A] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:ring-offset-2"
                  aria-label="View next service"
                >
                  →
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#C9A44C]">
                  {currentSlide.number} / {currentSlide.service}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
                  {currentSlide.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {currentSlide.description}
                </p>

                <div className="mt-6 flex gap-2">
                  {focusSlides.map((slide, index) => (
                    <button
                      key={slide.number}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === index
                          ? "w-8 bg-[#7A1E1E]"
                          : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}