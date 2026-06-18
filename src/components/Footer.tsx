import { profile } from "../data";

export function Footer() {
  return (
    <footer className="px-6 py-9 text-center text-sm text-ink-faint">
      Built by {profile.name} · © {new Date().getFullYear()}
    </footer>
  );
}
