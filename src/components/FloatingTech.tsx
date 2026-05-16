import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { FLOATING_TECH } from "../data/resume";
import {
  SiAngular,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Angular: SiAngular,
  React: SiReact,
  TypeScript: SiTypescript,
  NgRx: SiRedux,
  Redux: SiRedux,
  RxJS: TbApi,
  WebSockets: TbApi,
  Tailwind: SiTailwindcss,
};

type FloatingTechProps = {
  reduceMotion: boolean;
};

export function FloatingTech({ reduceMotion }: FloatingTechProps) {
  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {FLOATING_TECH.map((name, i) => {
        const Icon = ICONS[name] ?? SiTypescript;
        const top = 12 + (i % 4) * 18;
        const left = 8 + ((i * 17) % 75);
        return (
          <motion.div
            key={name}
            className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 text-cyan-400 shadow-lg backdrop-blur-md dark:bg-slate-900/60"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, i % 2 === 0 ? 4 : -4, 0],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
