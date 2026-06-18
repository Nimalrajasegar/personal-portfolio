import { profile, education } from "../data";
import headshot from "../assets/headshot.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-teal/10" />

      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            {profile.status}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Hello, I'm <span className="text-teal">{profile.name}</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-ink-soft">Aspiring Software Developer</p>
          <p className="mt-4 max-w-md text-ink-soft">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-ink-faint">
            {education.degree.split(",")[0]} · {education.years}
          </p>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-4 -z-10 rounded-full bg-teal/15" />
          <img
            src={headshot}
            alt={profile.name}
            className="aspect-square w-64 rounded-full border-4 border-white object-cover shadow-xl sm:w-80"
          />
        </div>
      </div>
    </section>
  );
}
