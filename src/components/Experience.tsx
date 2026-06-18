import { education, experience } from "../data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Education & Experience" title="How I got here">
      <div className="relative space-y-9 border-l-2 border-teal/50 pl-7">
        <div className="relative">
          <span className="absolute -left-[2.05rem] top-1 size-4 rounded-full border-2 border-teal bg-paper" />
          <span className="mb-1 block font-mono text-sm text-teal">{education.years}</span>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <span className="block text-sm text-ink-soft">
            {education.institute} · CGPA {education.cgpa}
          </span>
        </div>

        {experience.map((e) => (
          <div key={e.role} className="relative">
            <span className="absolute -left-[2.05rem] top-1 size-4 rounded-full border-2 border-teal bg-paper" />
            <span className="mb-1 block font-mono text-sm text-teal">Duration: {e.duration}</span>
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <span className="mb-2 block text-sm text-ink-soft">{e.org}</span>
            <ul className="list-disc space-y-1.5 pl-5 text-ink-soft">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
