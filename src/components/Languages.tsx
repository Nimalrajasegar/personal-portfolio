import { languages } from "../data";
import { Section } from "./Section";

export function Languages() {
  return (
    <Section id="languages" eyebrow="Languages" title="Languages I speak">
      <div className="flex flex-wrap gap-4">
        {languages.map((l) => (
          <div key={l.name} className="min-w-[150px] flex-1 rounded-2xl border border-line bg-card p-5">
            <h4 className="font-semibold">{l.name}</h4>
            <span className="font-mono text-xs uppercase tracking-wide text-teal">{l.proficiency}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
