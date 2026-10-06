import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Layers,
  Plug,
  Server,
  Smartphone,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    text: "Building complete applications across frontend, backend and API layers.",
    icon: Layers,
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    text: "Building scalable and responsive interfaces with React.js and Angular.",
    icon: Gauge,
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    text: "Building Android and iOS applications with React Native and Expo.",
    icon: Smartphone,
  },
  {
    id: "api",
    title: "Backend & API Integration",
    text: "Working with Node.js, Express.js, .NET Web API and REST APIs.",
    icon: Plug,
  },
  {
    id: "business",
    title: "Healthcare & Business Applications",
    text: "Developing practical software solutions for healthcare operations and business workflows.",
    icon: Server,
  },
];
