import { motion } from "framer-motion";
import { ACHIEVEMENTS, EDUCATION } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

type EducationProps = {
  reduceMotion: boolean;
};

export function Education({ reduceMotion }: EducationProps) {
  return (
    <section id="education" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeader asStaggerChild label="Academics" title="Education and recognitions" />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp}>
            <GlassCard hover={!reduceMotion}>
              <span className="rounded-full border border-cyan-500/30 px-2.5 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                {EDUCATION.period}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{EDUCATION.school}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {EDUCATION.degree} · {EDUCATION.location}
              </p>
              <p className="mt-4 text-3xl font-bold text-cyan-500">{EDUCATION.result}</p>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlassCard>
              <h3 className="heading-card text-slate-900 dark:text-white">Achievements</h3>
              <ul className="mt-4 space-y-3">
                {ACHIEVEMENTS.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-slate-600 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-500 before:content-[''] dark:text-slate-400"
                    initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
