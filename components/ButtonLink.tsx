import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[#0B1F3A] text-white shadow-sm hover:bg-[#12345f] focus:ring-[#0B1F3A]",
    secondary:
      "border border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white focus:ring-[#0B1F3A]",
    light:
      "bg-white text-[#7A1E1E] hover:bg-[#FDF8F2] focus:ring-white",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}