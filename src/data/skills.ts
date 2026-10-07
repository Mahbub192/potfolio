import type { LucideIcon } from "lucide-react";
import {
  Database,
  Layout,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";

export interface SkillGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
  /** Spans two columns on md+ layouts. */
  wide?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "PrimeNG",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Nest.js", "Express.js", ".NET Web API", "REST APIs"],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Firebase",
      "Push Notifications",
      "Android",
      "iOS",
    ],
  },
  {
    id: "state",
    title: "State Management",
    icon: Workflow,
    skills: ["Redux", "Context API", "Zustand"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Azure DevOps", "VS Code", "Chrome DevTools"],
  },
  {
    id: "other",
    title: "Other",
    icon: Sparkles,
    wide: true,
    skills: [
      "REST API Integration",
      "JWT Authentication",
      "WebSockets",
      "Animations",
      "Video Feeds",
      "Responsive Design",
      "Debugging",
      "Performance Optimization",
    ],
  },
];
