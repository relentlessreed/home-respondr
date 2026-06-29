import Image from "next/image";
import { businessConfig, contactHref } from "@/lib/business-config";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:rgba(243,238,230,0.92)] backdrop-blur-xl">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <Image
              src={businessConfig.images.logo}
              alt={`${businessConfig.name} logo`}
              width={52}
              height={52}
              className="h-12 w-12 rounded-full border border-black/10 bg-white"
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-[var(--font-heading)] text-2xl uppercase leading-none tracking-[0.06em] text-[var(--color-secondary)]">
                {businessConfig.name}
              </span>
              <span className="truncate text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Local callback-first service
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={contactHref}
            className="button-dark px-4 py-2 text-sm"
          >
            Call {businessConfig.phone}
          </a>
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto pb-1 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-link whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
