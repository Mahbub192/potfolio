import { links, whatsappChatUrl } from "./profile";

export type FormProvider = "formsubmit" | "mailto" | "web3forms";

export interface ContactFormConfig {
  /**
   * "formsubmit" -> posts to FormSubmit (recommended once activated).
   * "mailto"     -> opens the visitor's email app.
   * "web3forms"  -> Web3Forms API (needs web3formsAccessKey).
   */
  provider: FormProvider;
  /**
   * Random string from FormSubmit's activation email.
   * Prefer this over a naked email in the form action.
   */
  formsubmitId: string;
  web3formsAccessKey: string;
  hint: string;
}

export const contactForm: ContactFormConfig = {
  provider: "formsubmit",
  // From FormSubmit activation email for http://localhost:5173/
  formsubmitId: "123484a3a48400a601b6a184df8c97c4",
  web3formsAccessKey: "",
  hint: "Prefer a quick reply? WhatsApp or LinkedIn usually reach me fastest.",
};

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

function githubDisplay(url: string) {
  if (!url) return "";
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export const contact: {
  headline: string;
  description: string;
  items: ContactItem[];
} = {
  headline: "Let's build something useful together.",
  description:
    "Open to Software Engineering and Full-Stack roles (full-time, on-site or remote). Based in Dhaka — happy to chat about React, React Native and product work.",
  items: [
    {
      id: "email",
      label: "Email",
      value: links.email,
      href: `mailto:${links.email}`,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: links.whatsapp,
      href: whatsappChatUrl(),
    },
    {
      id: "phone",
      label: "Phone",
      value: links.phone,
      href: `tel:${links.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/mahbub-ali-fullstack",
      href: links.linkedin,
    },
    ...(links.github
      ? [
          {
            id: "github",
            label: "GitHub",
            value: githubDisplay(links.github),
            href: links.github,
          } satisfies ContactItem,
        ]
      : []),
    {
      id: "location",
      label: "Location",
      value: links.location,
    },
    {
      id: "resume",
      label: "Resume",
      value: "Download PDF",
      href: links.resume,
    },
  ],
};
