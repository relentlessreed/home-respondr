import { businessConfig } from "@/lib/business-config";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section id="services" className="border-b border-black/10 bg-white">
      <div className="section-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Services"
          title="Structured around the ways a homeowner usually starts the conversation."
          description="With no verified service menu available, these sections are framed as contact lanes rather than hard claims about specific trades or certifications."
        />

        <div className="grid gap-x-10 gap-y-8 border-t border-black/10 pt-8 lg:grid-cols-2">
          {businessConfig.services.map((service, index) => (
            <article key={service.title} className="service-row">
              <span className="service-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-[var(--font-heading)] uppercase leading-none tracking-[0.04em] text-[var(--color-secondary)]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
