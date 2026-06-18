import type { ReactNode } from "react";
import { useReveal } from "../useReveal";
import { Eyebrow } from "./Eyebrow";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="mx-auto max-w-3xl border-b border-line px-6 py-16 last:border-b-0">
      <div ref={ref} className="reveal">
        <div className="mb-9 max-w-md">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="mt-2 text-ink-soft">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
