type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = invert ? "text-white" : "text-[var(--color-secondary)]";
  const descriptionColor = invert ? "text-slate-200" : "text-[var(--color-muted)]";
  const eyebrowTone = invert ? "border-white/10 bg-white/5 text-[var(--color-accent)]" : "";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className={`eyebrow ${eyebrowTone}`}>{eyebrow}</span>
      <h2
        className={`font-[var(--font-heading)] text-4xl uppercase leading-[0.95] tracking-[0.04em] sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`text-base leading-7 sm:text-lg ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
}
