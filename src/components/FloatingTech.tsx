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

/** Show fewer icons to reduce layout + paint cost on first load */
const VISIBLE_COUNT = 5;

type FloatingTechProps = {
  enabled: boolean;
};

export function FloatingTech({ enabled }: FloatingTechProps) {
  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease_forwards]" aria-hidden>
      {FLOATING_TECH.slice(0, VISIBLE_COUNT).map((name, i) => {
        const Icon = ICONS[name] ?? SiTypescript;
        const top = 14 + (i % 3) * 22;
        const left = 10 + ((i * 19) % 72);
        return (
          <div
            key={name}
            className="floating-tech-icon absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/35 text-cyan-400 shadow-lg backdrop-blur-sm dark:bg-slate-900/50"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${4.5 + i * 0.3}s`,
            }}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </div>
        );
      })}
    </div>
  );
}
