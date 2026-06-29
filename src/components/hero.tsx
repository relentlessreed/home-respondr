import Image from "next/image";
import { businessConfig, contactHref } from "@/lib/business-config";

export function Hero() {
  return (
    <section id="top" className="border-b border-black/10">
      <div className="section-shell section-space">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="eyebrow">Home service communication, kept direct</span>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-[var(--font-heading)] text-6xl uppercase leading-[0.92] tracking-[0.03em] text-[var(--color-secondary)] sm:text-7xl lg:text-[5.5rem]">
                {businessConfig.tagline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                {businessConfig.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button-primary">
                {businessConfig.ctaPrimary}
              </a>
              <a href={contactHref} className="button-secondary">
                {businessConfig.ctaSecondary}
              </a>
            </div>

            <dl className="grid gap-4 pt-6 sm:grid-cols-3">
              <div className="slab">
                <dt className="slab-label">Phone</dt>
                <dd className="slab-value">{businessConfig.phone}</dd>
              </div>
              <div className="slab">
                <dt className="slab-label">Service Area</dt>
                <dd className="slab-value">{businessConfig.serviceArea}</dd>
              </div>
              <div className="slab">
                <dt className="slab-label">Hours</dt>
                <dd className="slab-value">{businessConfig.hours[0]}</dd>
              </div>
            </dl>
          </div>

          <div className="hero-art-frame">
            <Image
              src={businessConfig.images.hero}
              alt={`${businessConfig.name} branded hero artwork`}
              width={1200}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
            <div className="hero-note">
              <p className="hero-note-label">Built from the facts available</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Confirmed business information is limited, so the site stays focused on response,
                contact, and clean presentation instead of invented claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
