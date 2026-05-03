type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const alignmentStyles =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignmentStyles}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A44C]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}