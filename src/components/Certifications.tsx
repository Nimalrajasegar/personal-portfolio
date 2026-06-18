import { certifications, accomplishments } from "../data";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Courses I've completed">
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.title} className="rounded-2xl border border-line bg-card p-5 transition hover:-translate-y-1 hover:border-teal">
            <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-teal">{c.category}</span>
            <h4 className="font-semibold">{c.title}</h4>
            <span className="text-sm text-ink-soft">{c.issuer}</span>
          </div>
        ))}
      </div>

      <ul className="mt-7 list-disc space-y-1.5 pl-5 text-ink-soft">
        {accomplishments.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </Section>
  );
}
