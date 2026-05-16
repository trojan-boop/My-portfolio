import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.header
      className={`mb-10 md:mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 dark:text-cyan-400">
        {label}
      </span>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-normal tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
      ) : null}
    </motion.header>
  );
}
