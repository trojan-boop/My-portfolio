import { motion } from "framer-motion";
import { LOTTIE, PROJECTS } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { LottiePlayer } from "./LottiePlayer";
import { SectionHeader } from "./ui/SectionHeader";

type ProjectsProps = {
  reduceMotion: boolean;
};

export function Projects({ reduceMotion }: ProjectsProps) {
  return (
    <section id="projects" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeader
          asStaggerChild
          label="Projects"
          title="Production-level builds"
          subtitle="SaaS dashboards, real-time chat, AI streaming assistants, and regulated betting UI."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50"
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-violet-500/10"
                aria-hidden
              />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    {p.subtitle ? (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
                    ) : null}
                  </div>
                  <span className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-[10px] uppercase tracking-wide text-cyan-600 dark:border-white/10 dark:text-cyan-400">
                    {p.period}
                  </span>
                </div>

                {p.title.includes("AI") && !reduceMotion ? (
                  <LottiePlayer src={LOTTIE.ai} className="mb-4 h-24 w-24" ariaLabel="AI animation" />
                ) : null}

                <p className="mb-3 text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider">Stack · </span>
                  {p.environment}
                </p>
                <ul className="mb-4 list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-slate-400">
                  {p.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {p.environment.split(",").map((tag) => (
                    <span
                      key={tag.trim()}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
