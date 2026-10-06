export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  /** Optional company profile / LinkedIn URL. */
  companyUrl?: string;
  period: string;
  summary: string;
  modules: string[];
  /** Label above the modules list — defaults to "Modules worked on". */
  modulesLabel?: string;
  responsibilities: string[];
  stack: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "farazy-maxit",
    role: "Software Engineer",
    company: "Farazy Max IT",
    period: "Dec 2023 — Present",
    current: true,
    summary:
      "Building and maintaining healthcare and business products used in production — including PrimeMIS (hospital MIS), HealthConnect (patient mobile app), and related web platforms across Angular, React Native and API integration.",
    modules: [
      "Patient Management",
      "Doctor Management",
      "Appointment Management",
      "Pharmacy",
      "Laboratory",
      "Reports",
      "Mobile healthcare flows",
    ],
    responsibilities: [
      "Developed responsive Angular interfaces for clinical and administrative workflows",
      "Built reusable components to keep UI consistent across modules",
      "Integrated REST APIs for .NET Web API services and MySQL-backed data",
      "Shipped React Native features for patient-facing healthcare apps",
      "Implemented forms, routing and state management across applications",
      "Fixed bugs and improved functionality reported by users and QA",
      "Collaborated with the team using Git and Azure DevOps",
    ],
    stack: [
      "Angular",
      "React Native",
      "TypeScript",
      "PrimeNG",
      "REST API",
      ".NET Web API",
      "MySQL",
      "Firebase",
      "Azure DevOps",
    ],
  },
  {
    id: "azzin",
    role: "React Native Developer",
    company: "Azzin LLC",
    companyUrl: "https://www.linkedin.com/company/azzin/",
    period: "Feb 2024 — Oct 2025",
    summary:
      "Worked on Muallim App — a school-parent communication product — using React Native and Expo. Built mobile screens, reusable UI, and REST API integrations that parents use for attendance, academic progress, homework and announcements.",
    modulesLabel: "Product focus",
    modules: [
      "Muallim App",
      "Child profiles",
      "Attendance",
      "Academic progress",
      "Homework",
      "School announcements",
      "Academic calendar",
    ],
    responsibilities: [
      "Developed Muallim App interfaces with React Native and Expo",
      "Built reusable and responsive mobile UI components",
      "Integrated REST APIs for school and parent workflows",
      "Implemented attendance, progress, homework and announcement features",
      "Fixed bugs and improved app performance and stability",
      "Supported production-ready mobile delivery for iOS",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "REST API",
      "Mobile UI",
    ],
  },
  {
    id: "achieve-it",
    role: "Web Developer",
    company: "Achieve IT Limited",
    period: "Mar 2023 — Dec 2023",
    summary:
      "Started professional development building and maintaining web interfaces, learning delivery discipline, collaboration and shipping features against real product requirements.",
    modules: ["Web UI", "Feature delivery", "Bug fixes"],
    responsibilities: [
      "Built and updated customer-facing web interfaces",
      "Implemented UI features from product requirements",
      "Fixed defects and improved existing page behaviour",
      "Collaborated with teammates on day-to-day delivery",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];
