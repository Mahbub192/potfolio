import type { LucideIcon } from "lucide-react";
import { Bug, Code, Link2, PenTool, Rocket, Search } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    text: "Understand business requirements and user needs.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    text: "Plan the interface and component structure.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Develop",
    text: "Build reusable and scalable components.",
    icon: Code,
  },
  {
    step: "04",
    title: "Integrate",
    text: "Connect APIs, authentication and backend services.",
    icon: Link2,
  },
  {
    step: "05",
    title: "Test & Improve",
    text: "Debug, optimize and improve performance.",
    icon: Bug,
  },
  {
    step: "06",
    title: "Deploy",
    text: "Prepare applications for production deployment.",
    icon: Rocket,
  },
];
