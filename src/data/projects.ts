import healthConnectImage from "@/assets/images/healthConnect.jpg";
import muallimImage from "@/assets/images/muallim.jpg";
import primesImage from "@/assets/images/Primes.jpg";
import sakuraImage from "@/assets/images/sakura.jpg";
import sakuraTvImage from "@/assets/images/sakura-tv.jpg";

export type ProjectVisual =
  | "mobile"
  | "hospital"
  | "queue"
  | "tv"
  | "business"
  | "commerce";

export type ProjectLinkKind = "demo" | "play" | "app" | "site";

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
  external: boolean;
}

export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  /** Label above the problem box — defaults to "Problem addressed". */
  problemLabel?: string;
  features: string[];
  /** Optional "My contribution" list, rendered in the same info-box style. */
  contribution?: string[];
  tech: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
  image?: string;
  featured?: boolean;
  /** Optional engagement window shown on the project card. */
  period?: string;
}

export const projects: Project[] = [
  {
    id: "healthconnect",
    index: "01",
    name: "HealthConnect",
    category: "Healthcare Mobile Application",
    description:
      "Production healthcare app for Android and iOS that helps patients find doctors, book appointments, manage records and access hospital services.",
    problem:
      "Patients had no single place to find doctors, book appointments, order medicines and keep medical records together.",
    features: [
      "Doctor search & appointment booking",
      "Medical reports and prescriptions",
      "Health records and health card management",
      "Home healthcare requests",
      "Medicine ordering and health packages",
      "Laboratory services and notifications",
    ],
    contribution: [
      "Built React Native screens and reusable mobile UI components",
      "Integrated REST APIs and Firebase-backed flows",
      "Implemented appointment, records and notification-related features",
      "Fixed bugs and improved stability for store releases",
      "Supported Android and iOS production delivery",
    ],
    tech: ["React Native", "Expo", "REST API", "Firebase"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.farazymaxit.open_mrs_mobileapp",
        kind: "play",
        external: true,
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/healthconnect-app/id6738586759",
        kind: "app",
        external: true,
      },
    ],
    visual: "mobile",
    image: healthConnectImage,
    featured: true,
  },
  {
    id: "muallim",
    index: "02",
    name: "Muallim App",
    category: "Education / School-Parent Communication · Azzin LLC",
    period: "Feb 2024 — Oct 2025",
    description:
      "School-parent mobile app built at Azzin LLC with React Native and Expo — covering attendance, academic progress, homework, announcements, calendars and child profiles.",
    problemLabel: "Problem solved",
    problem:
      "Parents needed one place to follow attendance, progress, homework and school announcements instead of scattered updates.",
    features: [
      "Child profile management",
      "Attendance tracking",
      "Academic progress",
      "Homework",
      "Academic calendar",
      "School announcements",
      "Prayer timings & Hijri calendar",
      "Application status",
    ],
    contribution: [
      "Developed Muallim App with React Native and Expo at Azzin LLC",
      "Built reusable and responsive mobile UI components",
      "Integrated REST APIs for school and parent data",
      "Delivered attendance, progress, homework and announcement flows",
      "Fixed bugs and improved performance for production use",
    ],
    tech: ["React Native", "Expo", "REST API", "TypeScript"],
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/us/app/muallim-app/id6742032793",
        kind: "app",
        external: true,
      },
    ],
    visual: "mobile",
    image: muallimImage,
    featured: true,
  },
  {
    id: "primemis",
    index: "03",
    name: "PrimeMIS",
    category: "Hospital Management Information System",
    description:
      "Hospital MIS that digitizes patient, appointment, pharmacy, laboratory and reporting workflows in one platform.",
    problem:
      "Clinical and admin teams were running disconnected processes instead of one shared system of record.",
    features: [
      "Patient and doctor management",
      "Appointment scheduling",
      "Pharmacy and laboratory modules",
      "Medical services and reports",
      "End-to-end healthcare workflows",
    ],
    contribution: [
      "Built Angular + PrimeNG screens for clinical modules",
      "Created reusable form and table components",
      "Integrated .NET Web API endpoints with MySQL-backed data",
      "Improved routing, forms and state across modules",
      "Resolved production bugs reported by hospital users",
    ],
    tech: ["Angular", "TypeScript", "PrimeNG", ".NET Web API", "MySQL"],
    links: [
      {
        label: "Live Demo",
        href: "https://primemis.farazymaxit.com/auth/login?returnUrl=%2F",
        kind: "demo",
        external: true,
      },
    ],
    visual: "hospital",
    image: primesImage,
  },
  {
    id: "sakura-ent",
    index: "04",
    name: "Sakura ENT Center",
    category: "Healthcare Web Application",
    description:
      "Waiting-room and patient-status web experience that shows live queue information for consultations.",
    problem:
      "Patients waiting for consultation had no clear view of who was being served, who was next, or how long the wait might be.",
    features: [
      "Patient information display",
      "Live queue and status information",
      "Current patient being served",
      "Next patient and accepted patients",
      "Responsive UI for waiting-room screens and mobile",
    ],
    contribution: [
      "Implemented the React waiting-room interface",
      "Wired live queue status views for clinic displays",
      "Built responsive layouts for screen and phone use",
      "Polished status states so staff and patients can read them quickly",
    ],
    tech: ["React", "TypeScript", "REST API"],
    links: [
      {
        label: "Live Website",
        href: "https://sakuraentcenter.com/",
        kind: "site",
        external: true,
      },
    ],
    visual: "queue",
    image: sakuraImage,
  },
  {
    id: "sakura-tv",
    index: "05",
    name: "Sakura TV",
    category: "Android TV · Clinic Waiting Room",
    description:
      "Kotlin Android TV app for Sakura ENT Center waiting rooms — live patient queue on screen with doctor info, status highlights and media playback for patients while they wait.",
    problem:
      "Clinic TVs needed a dedicated waiting-room display: who is running, who is next, and clear serial status — not just a phone or desktop web page.",
    features: [
      "Doctor profile and credentials on TV",
      "Live patient serial / queue table",
      "Running and next patient highlights",
      "Bengali status labels for clinic use",
      "Embedded media / YouTube for waiting patients",
      "Scrolling service notice banner",
    ],
    contribution: [
      "Built the Sakura TV waiting-room experience in Kotlin",
      "Implemented live queue UI for Android TV screens",
      "Displayed running, next and in-serial patient states",
      "Integrated media playback alongside queue information",
    ],
    tech: ["Kotlin", "Android TV", "REST API"],
    links: [
      {
        label: "See at Sakura ENT",
        href: "https://sakuraentcenter.com/contact",
        kind: "site",
        external: true,
      },
    ],
    visual: "tv",
    image: sakuraTvImage,
  },
  {
    id: "business-management",
    index: "06",
    name: "Business Management Applications",
    category: "Business Management",
    description:
      "Internal business tools built around dashboards, data management and day-to-day operational workflows.",
    problem:
      "Operations teams needed dashboards and data screens that keep pace with daily work instead of a custom UI being built for every new report.",
    features: [
      "Dashboard interfaces",
      "Data management screens",
      "REST API integration",
      "Responsive UI across breakpoints",
      "Reusable component library",
      "Business workflow support",
    ],
    contribution: [
      "Built dashboard and data-management screens in React",
      "Integrated REST APIs for operational workflows",
      "Created reusable UI components for consistent internal tools",
      "Improved responsiveness and day-to-day usability",
    ],
    tech: ["React.js", "TypeScript", "REST API", "State Management"],
    links: [],
    visual: "business",
  },
  {
    id: "web-applications",
    index: "07",
    name: "E-commerce / Web Applications",
    category: "Web Application",
    description:
      "Product and customer-facing web interfaces with secure authentication, API-backed data and steady feature delivery.",
    problem:
      "Product and account flows needed responsive, reliable interfaces where authentication, data and edge cases behave consistently.",
    features: [
      "Product interfaces",
      "Responsive layouts",
      "API integration",
      "Authentication flows",
      "Feature development",
      "Bug fixing and functionality improvements",
    ],
    contribution: [
      "Developed product and account UI with React.js",
      "Implemented authentication and API-backed screens",
      "Delivered new features and fixed production bugs",
      "Kept layouts responsive across devices",
    ],
    tech: ["React.js", "JavaScript", "REST API", "Authentication"],
    links: [],
    visual: "commerce",
  },
];
