"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Resources", href: "/#resources" },
    { label: "Contact", href: "/book-consultation" },
  ];

  const serviceLinks = [
    {
      label: "Financial Planning",
      href: "/services/financial-planning",
    },
    {
      label: "Investment Strategies",
      href: "/services/investment-strategies",
    },
    {
      label: "Insurance Solutions",
      href: "/services/insurance-solutions",
    },
  ];

  const loginLinks = [
    {
      label: "Client Login",
      href: "https://viefund.queenfinancial.com/myportfolio/",
    },
    {
      label: "Agent Login",
      href: "https://viefund.queenfinancial.com/",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/queenfinancial-logo.png"
            alt="Queen Financial Group Inc. logo"
            width={260}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#0B1F3A]"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-sm font-medium text-gray-700 transition hover:text-[#0B1F3A]"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
            >
              Services
            </button>

            {isServicesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="w-64 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FDF8F2] hover:text-[#7A1E1E]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#0B1F3A]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsLoginOpen(true)}
            onMouseLeave={() => setIsLoginOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="rounded-full border border-[#0B1F3A] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:ring-offset-2"
              aria-haspopup="true"
              aria-expanded={isLoginOpen}
            >
              Login
            </button>

            {isLoginOpen && (
              <div className="absolute right-0 top-full pt-3">
                <div className="w-52 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
                  {loginLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#FDF8F2] hover:text-[#7A1E1E]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/book-consultation"
            className="rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#12345f]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-[#0B1F3A] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-4">
              <p className="mb-3 text-sm font-semibold text-[#0B1F3A]">
                Services
              </p>

              <div className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-[#0B1F3A] px-4 py-2 text-center text-sm font-semibold text-[#0B1F3A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-4">
              <p className="mb-3 text-sm font-semibold text-[#0B1F3A]">
                Login
              </p>

              <div className="flex flex-col gap-3">
                {loginLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#0B1F3A] px-4 py-2 text-center text-sm font-semibold text-[#0B1F3A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              className="rounded-full bg-[#0B1F3A] px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}