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
  const reveal = reduceMotion
    ? { initial: "visible" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: viewportOnce };

  return (
    <section id="skills" className="relative z-10 px-4 py-20 md:px-8 lg:px-12">
      <motion.div className="mx-auto max-w-6xl" variants={staggerContainer} {...reveal}>
        <SectionHeader
          asStaggerChild
          label="Skills"
          title="Technical depth"
          subtitle="Languages, frameworks, architecture, and delivery tools—organized for quick scanning."
        />

        <motion.div variants={fadeUp} className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <GlassCard key={group.title} hover={!reduceMotion}>
              <h3 className="heading-card text-slate-900 dark:text-slate-100">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </motion.div>

        <SectionHeader
          asStaggerChild
          label="Proficiency"
          title="Core strengths"
          subtitle="Measured across production apps, code reviews, and shipped features."
        />

        <motion.ul variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          {SKILL_PROFICIENCY.map((skill) => (
            <SkillProficiencyBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
