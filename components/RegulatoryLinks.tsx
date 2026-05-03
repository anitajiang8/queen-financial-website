import Image from "next/image";
import Link from "next/link";

export default function RegulatoryLinks() {
  const links = [
    {
      label: "Conflict of Interest and Legal",
      href: "https://queenfinancial.ca/wp-content/uploads/2022/08/Conflict-of-Interest-and-Legal.pdf",
    },
    {
      label: "RDI Disclosure",
      href: "https://queenfinancial.ca/wp-content/uploads/2023/03/RDI-Disclosure.pdf",
    },
    {
      label: "Privacy",
      href: "https://queenfinancial.ca/wp-content/uploads/2022/08/Privacy.pdf",
    },
    {
      label: "Unclaimed Property",
      href: "https://queenfinancial.ca/wp-content/uploads/2022/08/Unclaimed-Property.pdf",
    },
  ];

  return (
    <section className="bg-[#F8F7F3] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <Image
            src="/images/ciro-ocri-logo.png"
            alt="CIRO OCRI logo"
            width={420}
            height={120}
            className="h-auto w-full max-w-sm"
          />
        </div>

        <div className="mt-10 grid gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-xl px-4 py-4 text-center text-sm font-semibold text-[#0B1F3A] underline-offset-4 transition hover:bg-[#FDF8F2] hover:text-[#7A1E1E] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}