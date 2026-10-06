import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons/BrandIcons";
import { links, whatsappChatUrl } from "@/data/profile";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  /** Renders text labels next to the icons (used in the footer / contact). */
  withLabels?: boolean;
  ariaLabel?: string;
}

const network: Array<{
  id: string;
  label: string;
  href: string;
  Icon: typeof GithubIcon;
}> = [
  { id: "linkedin", label: "LinkedIn", href: links.linkedin, Icon: LinkedinIcon },
  ...(links.whatsapp
    ? [
        {
          id: "whatsapp",
          label: "WhatsApp",
          href: whatsappChatUrl(),
          Icon: WhatsAppIcon,
        },
      ]
    : []),
  ...(links.github
    ? [{ id: "github", label: "GitHub", href: links.github, Icon: GithubIcon }]
    : []),
];

export function SocialLinks({
  className,
  withLabels = false,
  ariaLabel = "Social profiles",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} aria-label={ariaLabel}>
      {network.map(({ id, label, href, Icon }) =>
        href ? (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            title={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:border-border-strong hover:text-foreground",
              withLabels
                ? "h-10 px-4 text-sm font-medium"
                : "h-9 w-9 justify-center",
            )}
          >
            <Icon className="h-[17px] w-[17px]" />
            {withLabels ? <span>{label}</span> : null}
          </a>
        ) : null,
      )}
    </div>
  );
}
