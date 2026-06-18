import { useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-ink">
          {profile.initials}
          <span className="text-teal">.</span>
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink-soft hover:text-teal">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 md:inline-block"
        >
          Let's Talk
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center md:hidden"
        >
          <span className="relative block h-0.5 w-5 bg-ink before:absolute before:-top-1.5 before:block before:h-0.5 before:w-5 before:bg-ink after:absolute after:top-1.5 after:block after:h-0.5 after:w-5 after:bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-line bg-card px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink-soft">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-teal">
            Let's Talk
          </a>
        </nav>
      )}
    </header>
  );
}
