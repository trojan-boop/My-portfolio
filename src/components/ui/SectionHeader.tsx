import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { toTitleCase } from "../../lib/text";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use inside a parent stagger container — avoids nested whileInView staying at opacity 0 */
  asStaggerChild?: boolean;
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  asStaggerChild = false,
}: SectionHeaderProps) {
  const displayTitle = toTitleCase(title);
  const className = `mb-10 md:mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`;

  const content = (
    <>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 dark:text-cyan-400">
        {label}
      </span>
      <h2 className="heading-section mt-3 text-2xl text-slate-900 md:text-[1.75rem] lg:text-3xl dark:text-slate-50">
        {displayTitle}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
      ) : null}
    </>
  );

  if (asStaggerChild) {
    return (
      <motion.header className={className} variants={fadeUp}>
        {content}
      </motion.header>
    );
  }

  return (
    <motion.header
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {content}
    </motion.header>
  );
}
