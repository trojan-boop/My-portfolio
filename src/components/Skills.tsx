import { motion } from "framer-motion";
import { SKILL_GROUPS, SKILL_PROFICIENCY } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";
import { SkillProficiencyBar } from "./ui/SkillProficiencyBar";

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

        <SectionHeader
          label="Proficiency"
          title="Core strengths"
          subtitle="Measured across production apps, code reviews, and shipped features."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {SKILL_PROFICIENCY.map((skill) => (
            <SkillProficiencyBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
