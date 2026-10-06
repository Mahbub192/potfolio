/**
 * Kept as `.dat` on purpose: a local (loopback-only) filter on this machine
 * answers any URL ending in `.pdf`, `.zip` or `.bin` with an empty 204,
 * which cancels the download before it reaches the server. The saved file
 * name comes from `resumeFileName` below.
 */
import resumePdf from "@/assets/resume/Mahbub_Ali_Resume.dat?url";

/**
 * Central profile configuration.
 * Update these values before deploying — nothing else needs to change.
 */
export const profile = {
  name: "Mahbub Ali",
  initials: "MA",
  role: "Software Engineer",
  tagline: "Software Engineer · Full-Stack Developer",
  headline: "Building healthcare and business products people actually use.",
  supporting:
    "I ship web and mobile apps across React, React Native, Angular and Node.js — from patient-facing products to hospital and operations tools.",
  availability: "Open to full-time · on-site or remote",
  heroStack: ["React.js", "React Native", "Angular", "Node.js", ".NET Web API"],
};

/**
 * Personal links.
 * Leave `github` empty to hide GitHub buttons until you add your profile URL.
 */
export const links = {
  github: "",
  linkedin: "https://www.linkedin.com/in/mahbub-ali-fullstack/",
  email: "mahbubaligub182@gmail.com",
  resume: resumePdf,
  phone: "+8801626420647",
  /** WhatsApp chat number */
  whatsapp: "+8801705359706",
  location: "Mirpur 11, Dhaka, Bangladesh",
};

/** Public site origin used for SEO meta tags once deployed. */
export const siteUrl = "https://mahbub192.github.io/potfolio";

/** Filename used by the Download/Resume links. */
export const resumeFileName = "Mahbub_Ali_Resume.pdf";

export const meta = {
  title: "Mahbub Ali | Software Engineer | Full-Stack Developer",
  description:
    "Hire Mahbub Ali — Software Engineer shipping healthcare, education and business apps with React.js, React Native, Angular, Node.js and .NET Web API. Based in Dhaka, open to remote roles.",
};

export function whatsappChatUrl(message?: string) {
  const digits = links.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(
    message ??
      "Hi Mahbub — I found your portfolio and would like to connect.",
  );
  return `https://wa.me/${digits}?text=${text}`;
}
