import { type FormEvent, useRef, useState } from "react";
import { contact } from "../data";
import { googleFormConfig } from "../googleForm";
import { useReveal } from "../useReveal";
import { Eyebrow } from "./Eyebrow";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const payload = new URLSearchParams({
      [googleFormConfig.fields.name]: (data.get("name") as string) ?? "",
      [googleFormConfig.fields.email]: (data.get("email") as string) ?? "",
      [googleFormConfig.fields.subject]: (data.get("subject") as string) ?? "",
      [googleFormConfig.fields.message]: (data.get("message") as string) ?? "",
    });

    setStatus("sending");
    try {
      // Google Forms doesn't return CORS headers, so the response is
      // opaque — "no-cors" mode is the documented way to submit it
      // from a browser without the request being blocked.
      await fetch(googleFormConfig.actionUrl, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div ref={ref} className="reveal">
        <div className="mb-10">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl font-bold">Let's talk.</h2>
          <p className="mt-2 max-w-sm text-ink-soft">
            Open to internships, junior roles, and anyone who wants to build something together.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <InfoRow icon={<PinIcon />} label="Location" value={contact.location} />
            <InfoRow icon={<PhoneIcon />} label="Call Me" value={contact.phone} />
            <InfoRow icon={<MailIcon />} label="Email Me" value={contact.email} />

            <div className="flex gap-3 pt-1">
              <SocialLink href={contact.linkedin} label="LinkedIn" icon={<LinkedInIcon />} />
              <SocialLink href={contact.github} label="GitHub" icon={<GitHubIcon />} />
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              <Field id="cf-name" name="name" label="Your name" type="text" placeholder="Your name" required />
              <Field id="cf-email" name="email" label="Your email" type="email" placeholder="you@email.com" required />
            </div>
            <Field id="cf-subject" name="subject" label="Subject" type="text" placeholder="What's this about?" />
            <div>
              <label htmlFor="cf-message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full rounded-xl border border-line bg-card px-3.5 py-3 text-sm focus:border-teal focus:outline-none"
              />
            </div>
            <p className="-mt-1 text-xs text-ink-faint">
              Sent straight to my Google Form — no email app needed.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-sm font-medium text-teal">Thanks — your message was sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">Something went wrong. Try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="flex size-11 flex-none items-center justify-center rounded-full bg-teal/10 text-teal">
        {icon}
      </span>
      <div>
        <h4 className="font-semibold">{label}</h4>
        <p className="text-sm text-ink-soft">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-ink hover:bg-ink hover:text-paper"
    >
      {icon}
    </a>
  );
}

function iconProps() {
  return { viewBox: "0 0 24 24", width: 18, height: 18 } as const;
}

function PinIcon() {
  return (
    <svg {...iconProps()} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps()} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps()} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18v12H3z" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps()} width={16} height={16} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6.5 0h3.8v1.7h.05c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...iconProps()} width={16} height={16} fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.3 7.7 10.8.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1.9-.2 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.7-5.8 7.7-10.8C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex-1 basis-[200px]">
      <label htmlFor={id} className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-line bg-card px-3.5 py-3 text-sm focus:border-teal focus:outline-none"
      />
    </div>
  );
}
