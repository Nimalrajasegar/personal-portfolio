import { profile, education, contact } from "../data";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student who likes finishing what data starts.">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-ink-soft">
          <div className="relative mb-2 flex size-24 items-center justify-center rounded-full border border-teal font-display text-2xl font-bold text-ink before:absolute before:-inset-2 before:rounded-full before:border before:border-dashed before:border-accent/60">
            {profile.initials}
          </div>
          <p>
            I'm a Computer Science Engineering student at {education.institute}, splitting my time between
            machine learning experiments and frontend interfaces. Most recently I worked as a Frontend Developer
            Intern at TVK Company, where I helped build responsive UI components and got a first look at how
            product teams ship work.
          </p>
          <p>
            Alongside coursework, I build small end-to-end projects — from a Parkinson's disease prediction model
            trained on patient data, to an AI interview simulator that turns a resume into a personalised practice
            plan. Each project is a chance to get comfortable with the next layer of the stack.
          </p>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 rounded-2xl border border-line bg-card p-6 self-start">
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">Location</dt>
          <dd className="font-medium">{contact.location}</dd>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">Degree</dt>
          <dd className="font-medium">{education.degree}</dd>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">Institute</dt>
          <dd className="font-medium">{education.institute}</dd>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">Timeline</dt>
          <dd className="font-medium">{education.years}</dd>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">CGPA</dt>
          <dd className="font-medium">{education.cgpa}</dd>
          <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint self-center">Email</dt>
          <dd className="font-medium">
            <a href={`mailto:${contact.email}`} className="text-teal hover:underline">
              {contact.email}
            </a>
          </dd>
        </dl>
      </div>
    </Section>
  );
}
