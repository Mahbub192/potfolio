import { Download, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent, type JSX } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, headingId } from "@/components/ui/Section";
import { contact, contactForm } from "@/data/contact";
import { links, resumeFileName, whatsappChatUrl } from "@/data/profile";
import { containerCx, isExternal } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const itemIcons: Record<string, JSX.Element> = {
  email: <Mail className="h-4 w-4" aria-hidden="true" />,
  whatsapp: <WhatsAppIcon className="h-4 w-4" />,
  phone: <Phone className="h-4 w-4" aria-hidden="true" />,
  linkedin: <LinkedinIcon className="h-4 w-4" />,
  github: <GithubIcon className="h-4 w-4" />,
  location: <MapPin className="h-4 w-4" aria-hidden="true" />,
  resume: <Download className="h-4 w-4" aria-hidden="true" />,
};

const rowCx =
  "group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 transition-all duration-200 hover:-translate-y-px hover:border-border-strong hover:shadow-soft";

function validate(values: { name: string; email: string; message: string }) {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10)
    errors.message = "Please add a little more detail (at least 10 characters).";
  return errors;
}

function openMailto(values: { name: string; email: string; message: string }) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
  const body = encodeURIComponent(
    `${values.message}\n\n— ${values.name}\n${values.email}`,
  );
  window.location.assign(
    `mailto:${links.email}?subject=${subject}&body=${body}`,
  );
}

async function copyEmailAddress() {
  try {
    await navigator.clipboard.writeText(links.email);
    return true;
  } catch {
    return false;
  }
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const formsubmitId = contactForm.formsubmitId.trim();
  const useFormsubmit =
    contactForm.provider === "formsubmit" && Boolean(formsubmitId);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      setFeedback("Please fix the highlighted fields.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    if (!useFormsubmit) {
      openMailto(values);
      form.reset();
      setStatus("sent");
      setFeedback("Email app opened — press Send there to finish.");
      return;
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${formsubmitId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `Portfolio enquiry from ${values.name}`,
          _template: "table",
          _replyto: values.email,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const ok =
        response.ok &&
        (result?.success === true ||
          result?.success === "true" ||
          String(result?.success).toLowerCase() === "true");

      if (!ok) {
        const msg = (result?.message ?? "").toLowerCase();
        if (msg.includes("activate") || msg.includes("confirm")) {
          throw new Error(
            "FormSubmit is not activated yet. Open Gmail and click “Activate Form”, then try again.",
          );
        }
        throw new Error(result?.message || "FormSubmit could not send this message.");
      }

      form.reset();
      setStatus("sent");
      setFeedback(
        "Sent. Check Inbox and Spam for “FormSubmit” / “Portfolio enquiry”. If empty, click Activate Form in the older FormSubmit email first.",
      );
    } catch (error) {
      // Guaranteed fallback so the visitor can still reach you.
      openMailto(values);
      form.reset();
      setStatus("sent");
      setFeedback(
        error instanceof Error
          ? `${error.message} Opened your email app as backup — press Send there.`
          : "Opened your email app as backup — press Send there.",
      );
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-200 focus:border-accent";

  return (
    <Section
      id="contact"
      ariaLabelledBy={headingId("contact")}
      className="min-h-[70vh] pb-24 md:pb-32"
    >
      <div className={containerCx}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              id="contact"
              index="06"
              eyebrow="Contact"
              title={contact.headline}
              description={contact.description}
            />

            <ul className="mt-8 space-y-2.5">
              {contact.items.map((item, index) => {
                const external = item.href ? isExternal(item.href) : false;
                const content = (
                  <>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-accent">
                      {itemIcons[item.id]}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10.5px] tracking-[0.18em] text-muted-foreground uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <Reveal key={item.id} delay={0.08 + index * 0.05}>
                    <li>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer noopener" : undefined}
                          download={
                            item.id === "resume" ? resumeFileName : undefined
                          }
                          className={rowCx}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className={rowCx}>{content}</div>
                      )}
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                autoComplete="on"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
              >
                <h3 className="text-[15px] font-semibold tracking-tight">
                  Send a message
                </h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-[13px] font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      onChange={() =>
                        errors.name &&
                        setErrors((prev) => ({ ...prev, name: undefined }))
                      }
                      className={fieldClass}
                    />
                    {errors.name ? (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-[13px] font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      onChange={() =>
                        errors.email &&
                        setErrors((prev) => ({ ...prev, email: undefined }))
                      }
                      className={fieldClass}
                    />
                    {errors.email ? (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-[13px] font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about the role or project…"
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      onChange={() =>
                        errors.message &&
                        setErrors((prev) => ({ ...prev, message: undefined }))
                      }
                      className={`${fieldClass} resize-y`}
                    />
                    {errors.message ? (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button type="submit" size="lg" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <Button href={whatsappChatUrl()} variant="outline" size="lg">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="lg"
                    onClick={async (event) => {
                      event.preventDefault();
                      const copied = await copyEmailAddress();
                      window.location.assign(`mailto:${links.email}`);
                      setStatus("sent");
                      setFeedback(
                        copied
                          ? `Email copied: ${links.email}. If no mail app opened, paste it into Gmail.`
                          : `Email me at ${links.email}`,
                      );
                    }}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Copy email
                  </Button>
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className={
                    status === "error"
                      ? "mt-3 text-[13px] text-red-600 dark:text-red-400"
                      : "mt-3 text-[13px] text-muted-foreground"
                  }
                >
                  {feedback}
                </p>

                <p className="mt-5 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                  {contactForm.hint}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
