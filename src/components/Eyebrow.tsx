export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-teal mb-3">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}
