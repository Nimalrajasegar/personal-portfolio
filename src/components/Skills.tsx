import { skills } from "../data";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I currently work with"
      description="Levels reflect depth as described on my resume — everything else is working knowledge from coursework and personal projects."
    >
      <div>
        {skills.map((group) => (
          <div key={group.label} className="grid gap-4 border-t border-line py-4 first:border-t-0 md:grid-cols-[140px_1fr]">
            <span className="pt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">{group.label}</span>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-3.5 py-2 text-sm transition hover:-translate-y-0.5 hover:border-teal"
                >
                  {item.name}
                  {item.level && (
                    <span className="rounded-md bg-teal px-1.5 py-0.5 font-mono text-[0.65rem] text-paper">
                      {item.level}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
