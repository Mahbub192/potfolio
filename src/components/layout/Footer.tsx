import { ArrowUp, Download, Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons/BrandIcons";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { footerLinks } from "@/data/navigation";
import { links, profile, resumeFileName, whatsappChatUrl } from "@/data/profile";
import { containerCx } from "@/lib/utils";

const connect = [
  { id: "linkedin", label: "LinkedIn", href: links.linkedin, external: true as const },
  ...(links.whatsapp
    ? [
        {
          id: "whatsapp",
          label: "WhatsApp",
          href: whatsappChatUrl(),
          external: true as const,
        },
      ]
    : []),
  ...(links.github
    ? [{ id: "github", label: "GitHub", href: links.github, external: true as const }]
    : []),
  { id: "resume", label: "Resume", href: links.resume, download: resumeFileName },
  { id: "email", label: "Email", href: `mailto:${links.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-muted/40">
      <div className={containerCx}>
        <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-[12px] font-semibold text-background">
                {profile.initials}
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}. {profile.availability}.
            </p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[11px] font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              {connect.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target={"external" in item && item.external ? "_blank" : undefined}
                    rel={
                      "external" in item && item.external
                        ? "noreferrer noopener"
                        : undefined
                    }
                    download={"download" in item ? item.download : undefined}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.id === "github" ? (
                      <GithubIcon className="h-4 w-4" />
                    ) : item.id === "linkedin" ? (
                      <LinkedinIcon className="h-4 w-4" />
                    ) : item.id === "whatsapp" ? (
                      <WhatsAppIcon className="h-4 w-4" />
                    ) : item.id === "resume" ? (
                      <Download className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 rounded-md transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
