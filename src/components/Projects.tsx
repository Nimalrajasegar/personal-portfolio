import { projects } from "../data";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-teal hover:shadow-lg"
          >
            <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">{p.role}</span>
            </div>
            <p className="mb-4 text-ink-soft">{p.summary}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
