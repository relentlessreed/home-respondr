import { SectionHeading } from "@/components/section-heading";
import { businessConfig } from "@/lib/business-config";

export function Trust() {
  return (
    <section id="why-us" className="border-y border-black/10 bg-[var(--color-secondary)] text-white">
      <div className="section-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Process"
          title="The site is organized around the practical questions a local lead asks first."
          description="This keeps the page useful now, while leaving room for the owner to add more exact business facts later."
          invert
        />

        <div className="grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {businessConfig.process.map((item, index) => (
              <div key={item} className="process-row">
                <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {businessConfig.trustItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-[var(--font-heading)] text-2xl uppercase leading-none tracking-[0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
