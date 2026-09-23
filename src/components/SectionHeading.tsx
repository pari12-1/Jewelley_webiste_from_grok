export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="mb-2 block text-[0.7rem] font-medium tracking-[0.18em] text-gold uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-xl text-ink ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
