import { useEffect, useRef, useState } from "react";

type SkillProficiencyBarProps = {
  name: string;
  level: number;
  reduceMotion: boolean;
};

function tierFor(level: number): { label: string; className: string } {
  if (level >= 90) return { label: "Expert", className: "skill-tier-expert" };
  if (level >= 85) return { label: "Advanced", className: "skill-tier-advanced" };
  return { label: "Proficient", className: "skill-tier-proficient" };
}

export function SkillProficiencyBar({ name, level, reduceMotion }: SkillProficiencyBarProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  const tier = tierFor(level);

  return (
    <li
      ref={ref}
      className="skill-bar-card group rounded-2xl border border-slate-200/70 bg-white/55 p-4 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:border-cyan-500/25 hover:shadow-md dark:border-white/10 dark:bg-slate-900/45 dark:hover:border-cyan-500/20"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
          <span className={`skill-tier mt-1.5 inline-block ${tier.className}`}>{tier.label}</span>
        </div>
        <div className="flex shrink-0 flex-col items-end">
          <span className="skill-bar-value text-2xl font-semibold tabular-nums leading-none">{level}</span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">/ 100</span>
        </div>
      </div>

      <div
        className="skill-bar-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div className="skill-bar-ticks" aria-hidden>
          {[25, 50, 75].map((tick) => (
            <span key={tick} style={{ left: `${tick}%` }} />
          ))}
        </div>
        <div
          className={`skill-bar-fill ${active ? "skill-bar-fill-active" : ""}`}
          style={{ ["--progress" as string]: `${level}%` }}
        >
          <span className="skill-bar-glow" aria-hidden />
          {!reduceMotion ? <span className="skill-bar-shine" aria-hidden /> : null}
        </div>
        <span className="skill-bar-cap" aria-hidden />
      </div>
    </li>
  );
}
