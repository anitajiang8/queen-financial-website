import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  const accountLinks = [
    { label: "Client Login", href: "https://viefund.queenfinancial.com/myportfolio/" },
    { label: "Agent Login", href: "https://viefund.queenfinancial.com/" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Disclosure", href: "#" },
    { label: "Terms of Use", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/queenfinancial-logo.png"
                alt="Queen Financial Group Inc. logo"
                width={56}
                height={56}
                className="h-14 w-auto rounded bg-white p-1"
              />

              <div>
                <p className="text-base font-semibold">Queen Financial</p>
                <p className="text-sm text-gray-300">Group Inc.</p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-300">
              Professional financial services across investment, insurance, and
              financial planning to help clients plan with confidence.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Accounts
            </h2>

            <ul className="mt-5 space-y-3">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Legal
            </h2>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
              Our Information
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-gray-300">
              <div>
                <p className="font-semibold text-white">Head Office:</p>
                <address className="mt-1 not-italic">
                  7030 Woodbine Ave. Suite 901
                  <br />
                  Markham, Ontario, L3R 6G2
                </address>
              </div>

              <div className="space-y-1">
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a
                    href="tel:4168480288"
                    className="transition hover:text-white"
                  >
                    416-848-0288
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-white">Fax:</span>{" "}
                  +(905) 489-6565
                </p>

                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href="mailto:info@queenfinancial.com"
                    className="transition hover:text-white"
                  >
                    info@queenfinancial.com
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Business Hours:</p>
                <p className="mt-1">Monday to Friday, 9:30 AM to 6:00 PM</p>
              </div>

              <div>
                <p className="font-semibold text-white">Other Times:</p>
                <p className="mt-1">
                  Weekends, holidays, and evenings by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Queen Financial Group Inc. All rights reserved.</p>

          <p>Designed and developed as a modern website redesign.</p>
        </div>
      </div>
    </footer>
  );
}