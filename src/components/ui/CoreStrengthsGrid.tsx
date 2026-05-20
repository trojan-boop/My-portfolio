import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SiAngular, SiReact, SiRedux } from "react-icons/si";
import { TbApi, TbLayoutDashboard, TbGauge, TbAccessible } from "react-icons/tb";
import type { IconType } from "react-icons";

type Strength = {
  name: string;
  level: number;
};

type CoreStrengthsGridProps = {
  strengths: readonly Strength[];
  reduceMotion: boolean;
};

function tierFor(level: number) {
  if (level >= 90) return { label: "Expert", tone: "expert" as const };
  if (level >= 85) return { label: "Advanced", tone: "advanced" as const };
  return { label: "Proficient", tone: "proficient" as const };
}

function iconFor(name: string): IconType {
  const n = name.toLowerCase();
  if (n.includes("angular") || n.includes("typescript")) return SiAngular;
  if (n.includes("react") || n.includes("redux")) return SiReact;
  if (n.includes("ngrx") || n.includes("rxjs") || n.includes("state")) return SiRedux;
  if (n.includes("api") || n.includes("streaming")) return TbApi;
  if (n.includes("performance") || n.includes("architecture")) return TbGauge;
  if (n.includes("responsive") || n.includes("accessibility")) return TbAccessible;
  return TbLayoutDashboard;
}

function keywords(name: string): string[] {
  const n = name.toLowerCase();
  if (n.includes("angular")) return ["Components", "NgRx", "Enterprise"];
  if (n.includes("react")) return ["Hooks", "Redux", "SPA"];
  if (n.includes("state")) return ["NgRx", "RxJS", "Stores"];
  if (n.includes("api")) return ["REST", "Streaming", "Realtime"];
  if (n.includes("performance")) return ["Core Web Vitals", "Lazy load", "Scale"];
  if (n.includes("responsive") || n.includes("accessibility")) return ["WCAG", "Mobile", "A11y"];
  return ["Production", "UI", "DX"];
}

const ORB_SIZE = "5.25rem";

function StrengthOrb({
  level,
  active,
  icon: Icon,
}: {
  level: number;
  active: boolean;
  icon: IconType;
}) {
  const pct = active ? level : 0;

  return (
    <div className="relative mx-auto shrink-0" style={{ width: ORB_SIZE, height: ORB_SIZE }}>
      <div
        className={`strength-orb h-full w-full ${active ? "strength-orb-active" : ""}`}
        style={{ ["--level" as string]: pct } as CSSProperties}
        aria-hidden
      />
      <div className="strength-orb-core">
        <Icon className="h-5 w-5 text-cyan-400/90" aria-hidden />
        <span className="strength-orb-value tabular-nums">{level}</span>
      </div>
    </div>
  );
}

function StrengthCard({ name, level, reduceMotion }: Strength & { reduceMotion: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(reduceMotion);
  const tier = tierFor(level);
  const Icon = iconFor(name);
  const tags = keywords(name);

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
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  return (
    <article
      ref={ref}
      className={`strength-card group h-full ${active ? "strength-card-active" : ""}`}
      aria-label={`${name}, ${level} percent, ${tier.label}`}
    >
      <div className="strength-card-border" aria-hidden />
      <div className="strength-card-inner flex h-full flex-col">
        <StrengthOrb level={level} active={active} icon={Icon} />

        <div className="mt-4 flex min-h-0 flex-1 flex-col text-center">
          <div className="flex justify-center">
            <span className={`strength-tier strength-tier-${tier.tone}`}>{tier.label}</span>
          </div>
          <h3 className="mt-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-slate-900 dark:text-white">
            {name}
          </h3>
          <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-slate-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function CoreStrengthsGrid({ strengths, reduceMotion }: CoreStrengthsGridProps) {
  return (
    <div className="strength-grid">
      {strengths.map((s) => (
        <StrengthCard key={s.name} name={s.name} level={s.level} reduceMotion={reduceMotion} />
      ))}
    </div>
  );
}
