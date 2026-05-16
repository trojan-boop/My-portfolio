import { motion } from "framer-motion";
import { SKILL_GROUPS, SKILL_PROFICIENCY } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

type SkillsProps = {
  reduceMotion: boolean;
};

export function Skills({ reduceMotion }: SkillsProps) {
  return (
    <section id="skills" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeader
          label="Skills"
          title="Technical depth"
          subtitle="Languages, frameworks, architecture, and delivery tools—organized for quick scanning."
        />

        <motion.div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <GlassCard hover={!reduceMotion}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.li
                      key={skill}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <SectionHeader label="Proficiency" title="Core strengths" />
        <motion.ul className="space-y-5" variants={staggerContainer}>
          {SKILL_PROFICIENCY.map((skill) => (
            <motion.li key={skill.name} variants={fadeUp}>
              <motion.div
                className="flex justify-between text-sm"
                initial={false}
              >
                <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                <span className="text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
              </motion.div>
              <motion.div
                className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
