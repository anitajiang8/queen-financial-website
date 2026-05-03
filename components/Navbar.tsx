"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
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
          {navLinks.map((link) => (
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
          <Link
            href="#"
            className="rounded-full border border-[#0B1F3A] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
          >
            Client Login
          </Link>

          <Link
            href="#contact"
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="#"
                className="rounded-full border border-[#0B1F3A] px-4 py-2 text-center text-sm font-semibold text-[#0B1F3A]"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Login
              </Link>

              <Link
                href="#contact"
                className="rounded-full bg-[#0B1F3A] px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}