import { SITE } from "../data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/80 px-4 py-8 dark:border-white/10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>© {year} Anurag Ranjan. Next.js · R3F · Framer Motion · Tailwind.</p>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="text-cyan-600 hover:underline dark:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
