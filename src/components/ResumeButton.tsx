import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import { SITE } from "../data/resume";
import { scaleHover } from "../lib/motion";

type ResumeButtonProps = {
  variant?: "primary" | "nav";
  className?: string;
};

export function ResumeButton({ variant = "primary", className = "" }: ResumeButtonProps) {
  const base =
    variant === "primary"
      ? "inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400"
      : "inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-cyan-500/50 dark:border-white/15 dark:text-slate-200";

  return (
    <motion.a
      href={SITE.resumePath}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
      {...scaleHover}
    >
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="inline-flex"
      >
        <HiArrowDownTray className="h-4 w-4" aria-hidden />
      </motion.span>
      Download resume
    </motion.a>
  );
}
