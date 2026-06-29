"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { businessConfig } from "@/lib/business-config";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % businessConfig.gallery.length,
        );
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + businessConfig.gallery.length) % businessConfig.gallery.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeItem = activeIndex === null ? null : businessConfig.gallery[activeIndex];

  return (
    <section id="gallery" className="bg-white">
      <div className="section-shell section-space flex flex-col gap-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Branded gallery panels, presented with a full lightbox flow."
          description="No scraped photos were available, so the gallery uses custom brand artwork derived from the business name and site direction instead of outside stock."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {businessConfig.gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Open gallery image ${index + 1}: ${item.title}`}
              className={`group overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--color-surface)] p-3 text-left transition hover:-translate-y-1 ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1400}
                height={900}
                className={`w-full rounded-[1.5rem] border border-black/10 object-cover ${
                  index === 0 ? "h-[360px]" : "h-[260px]"
                }`}
              />
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
                <div>
                  <p className="font-[var(--font-heading)] text-2xl uppercase leading-none tracking-[0.04em] text-[var(--color-secondary)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
                <span className="gallery-open-indicator">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[70] bg-[color:rgba(16,24,32,0.88)] p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} expanded gallery view`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="mx-auto flex h-full max-w-6xl flex-col justify-center"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const start = touchStartX.current;
              const end = event.changedTouches[0]?.clientX ?? null;
              if (start === null || end === null) {
                return;
              }

              const delta = start - end;
              if (Math.abs(delta) < 40) {
                return;
              }

              if (delta > 0) {
                setActiveIndex((activeIndex + 1) % businessConfig.gallery.length);
              } else {
                setActiveIndex(
                  (activeIndex - 1 + businessConfig.gallery.length) % businessConfig.gallery.length,
                );
              }
            }}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Image {activeIndex + 1} of {businessConfig.gallery.length}
                </p>
                <h3 className="mt-2 font-[var(--font-heading)] text-3xl uppercase leading-none tracking-[0.04em]">
                  {activeItem.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close gallery"
                className="lightbox-button"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111b24] p-3 sm:p-4">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={1800}
                height={1200}
                className="max-h-[72vh] w-full rounded-[1.5rem] object-contain"
              />

              <button
                type="button"
                aria-label="Previous image"
                className="lightbox-arrow left-3"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + businessConfig.gallery.length) % businessConfig.gallery.length,
                  )
                }
              >
                Prev
              </button>

              <button
                type="button"
                aria-label="Next image"
                className="lightbox-arrow right-3"
                onClick={() => setActiveIndex((activeIndex + 1) % businessConfig.gallery.length)}
              >
                Next
              </button>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200">
              {activeItem.description}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
