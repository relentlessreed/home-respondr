import { businessConfig } from "@/lib/business-config";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>{businessConfig.name}</p>
        <p>{businessConfig.phone}</p>
        <p>{businessConfig.serviceArea}</p>
      </div>
    </footer>
  );
}
