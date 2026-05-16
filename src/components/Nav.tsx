import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun, HiBars3, HiXMark } from "react-icons/hi2";
import { useTheme } from "../context/ThemeProvider";
import { useActiveSection } from "../hooks/useActiveSection";
import { ResumeButton } from "./ResumeButton";

const LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#highlights", label: "Impact" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

type NavProps = {
  lowPower: boolean;
  onToggleLowPower: () => void;
};

export function Nav({ lowPower, onToggleLowPower }: NavProps) {
  const active = useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = active === id || (id === "top" && active === "top");
    return `relative px-2 py-1 text-sm transition-colors ${
      isActive
        ? "font-medium text-cyan-600 dark:text-cyan-400"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    }`;
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
        style={{ width: "0%" }}
        aria-hidden
      />
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8"
      >
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs text-cyan-600 dark:text-cyan-400">
            AR
          </span>
          <span className="hidden sm:inline">Anurag</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
              {active === l.href.slice(1) ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-2 right-2 h-0.5 rounded-full bg-cyan-500"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <motion.div className="flex items-center gap-2">
          <ResumeButton variant="nav" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300/80 p-2 text-slate-700 dark:border-white/15 dark:text-slate-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <HiOutlineSun className="h-4 w-4" /> : <HiOutlineMoon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={onToggleLowPower}
            className="hidden rounded-full border border-slate-300/80 px-2.5 py-1.5 text-[10px] uppercase tracking-wide text-slate-600 md:inline-block dark:border-white/15 dark:text-slate-400"
            aria-pressed={lowPower}
          >
            {lowPower ? "Lite" : "FX"}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </motion.div>
      </motion.div>

      {open ? (
        <motion.nav
          className="border-t border-slate-200/80 px-4 py-4 lg:hidden dark:border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="flex flex-col gap-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={linkClass(l.href)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ResumeButton variant="nav" className="mt-2 w-fit" />
          </div>
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
