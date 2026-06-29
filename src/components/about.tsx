import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { businessConfig } from "@/lib/business-config";

export function About() {
  return (
    <section id="about" className="bg-[var(--color-surface)]">
      <div className="section-shell section-space grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="media-frame">
          <Image
            src={businessConfig.images.about}
            alt={`${businessConfig.name} about artwork`}
            width={1200}
            height={900}
            className="h-[420px] w-full object-cover sm:h-[500px]"
          />
        </div>

        <div className="space-y-6">
          <SectionHeading
            eyebrow="About"
            title={businessConfig.aboutTitle}
            description="The business source material is sparse, so this section stays honest while still giving the owner a polished site that can be expanded later with confirmed details."
          />

          <div className="space-y-4 text-base leading-8 text-[var(--color-muted)]">
            {businessConfig.aboutText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="info-panel-dark">
              <p className="slab-label text-[var(--color-accent)]">Service Area</p>
              <p className="mt-3 text-lg font-semibold">{businessConfig.serviceArea}</p>
            </div>
            <div className="info-panel-light">
              <p className="slab-label">Best First Step</p>
              <p className="mt-3 text-lg font-semibold text-[var(--color-secondary)]">
                Call {businessConfig.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
