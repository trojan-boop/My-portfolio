import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.22 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
