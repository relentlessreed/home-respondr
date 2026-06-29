export type ServiceItem = {
  title: string;
  description: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type BusinessConfig = {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email?: string;
  address?: string;
  serviceArea: string;
  hours: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutText: string[];
  process: string[];
  services: ServiceItem[];
  trustItems: TrustItem[];
  gallery: GalleryItem[];
  images: {
    logo: string;
    hero: string;
    about: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    surface: string;
    ink: string;
    muted: string;
  };
};

export const businessConfig: BusinessConfig = {
  name: "HomeRespondr",
  tagline: "Quick local follow-up for home service needs.",
  description:
    "HomeRespondr is a direct, mobile-friendly local service brand built around fast replies, clear next steps, and a straightforward call-to-contact experience.",
  phone: "(785) 503-3425",
  serviceArea: "Local service area available by phone",
  hours: [
    "Hours not published",
    "Call for current availability",
  ],
  ctaPrimary: "Request a Callback",
  ctaSecondary: "Call HomeRespondr",
  aboutTitle: "A direct local-service website built around response time and clarity.",
  aboutText: [
    "Only the business name and phone number were available, so this site stays disciplined: no invented credentials, no fake reviews, and no unsupported claims about licenses, staff, or years in business.",
    "The message focuses on what the brand name itself suggests. HomeRespondr should feel easy to contact, fast to answer, and simple to work with when a homeowner needs to start the conversation.",
  ],
  process: [
    "Call or send a message with the issue, project, or visit you need scheduled.",
    "Get a direct reply and the next practical step instead of a long intake process.",
    "Use the site contact form for details, photos, and timing questions before the visit.",
  ],
  services: [
    {
      title: "Urgent Home Issues",
      description:
        "Use this lane for the jobs that need a quick reply, triage, or the fastest available scheduling window.",
    },
    {
      title: "Routine Service Visits",
      description:
        "Position standard appointments here for homeowners who need a normal visit, estimate, or follow-up.",
    },
    {
      title: "Project Estimates",
      description:
        "Keep larger repair or improvement conversations organized with a clear request and contact path.",
    },
    {
      title: "Ongoing Property Help",
      description:
        "This category covers repeat household needs, check-ins, and work that starts with a direct phone conversation.",
    },
  ],
  trustItems: [
    {
      title: "Straight Contact Path",
      description:
        "The site prioritizes the phone number, callback request, and a short form so the next customer does not have to hunt for a way in.",
    },
    {
      title: "No Unsupported Claims",
      description:
        "Everything on the page is limited to confirmed information or clearly signposted marketing copy built around the brand name.",
    },
    {
      title: "Mobile-First Conversion",
      description:
        "Buttons, spacing, typography, and the contact flow are tuned for homeowners reaching out from their phones.",
    },
  ],
  gallery: [
    {
      src: "/images/gallery-1.svg",
      alt: "HomeRespondr branded panel showing quick callback messaging",
      title: "Quick Callback Focus",
      description: "Brand panel emphasizing fast response and clear homeowner communication.",
    },
    {
      src: "/images/gallery-2.svg",
      alt: "HomeRespondr branded panel showing phone-first scheduling",
      title: "Phone-First Scheduling",
      description: "A gallery graphic built around direct contact and simple next steps.",
    },
    {
      src: "/images/gallery-3.svg",
      alt: "HomeRespondr branded panel showing local service coverage",
      title: "Local Coverage",
      description: "Messaging art centered on local service availability and direct follow-up.",
    },
    {
      src: "/images/gallery-4.svg",
      alt: "HomeRespondr branded panel showing project follow-up",
      title: "Clear Follow-Through",
      description: "A final panel focused on keeping estimates, updates, and requests organized.",
    },
  ],
  images: {
    logo: "/images/logo-mark.svg",
    hero: "/images/hero-art.svg",
    about: "/images/about-art.svg",
  },
  colors: {
    primary: "#A63A24",
    secondary: "#1A2A3A",
    accent: "#E1B24A",
    surface: "#F3EEE6",
    ink: "#1B2430",
    muted: "#5B6773",
  },
};

export const contactHref = `tel:${businessConfig.phone.replace(/[^\d+]/g, "")}`;
