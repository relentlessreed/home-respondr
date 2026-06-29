import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { businessConfig, contactHref } from "@/lib/business-config";

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-surface)]">
      <div className="section-shell section-space grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[2rem] bg-[var(--color-secondary)] p-8 text-white sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="The next step is simple: call now or send a short message."
            description="The existing form architecture is preserved and still posts to the Next.js API route that sends lead email through Resend."
            invert
          />

          <div className="mt-8 grid gap-6 text-sm leading-7 text-slate-200">
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Phone
              </p>
              <a href={contactHref} className="mt-2 block text-lg font-semibold text-white">
                {businessConfig.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Hours
              </p>
              <ul className="mt-2 grid gap-1">
                {businessConfig.hours.map((hours) => (
                  <li key={hours}>{hours}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Service Area
              </p>
              <p className="mt-2 text-base">{businessConfig.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-8 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
