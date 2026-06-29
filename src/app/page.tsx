import type { CSSProperties } from "react";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { businessConfig } from "@/lib/business-config";

export default function Home() {
  const themeVars = {
    "--color-primary": businessConfig.colors.primary,
    "--color-secondary": businessConfig.colors.secondary,
    "--color-accent": businessConfig.colors.accent,
    "--color-surface": businessConfig.colors.surface,
    "--color-ink": businessConfig.colors.ink,
    "--color-muted": businessConfig.colors.muted,
  } as CSSProperties;

  return (
    <main style={themeVars}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Trust />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
