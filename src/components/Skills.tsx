import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../data/resume";

type SkillsProps = {
  reduceMotion: boolean;
};

export function Skills({ reduceMotion }: SkillsProps) {
  return (
    <section className="section section--skills" id="skills">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Skills</span>
        <h2 className="section__title">Technical depth across the stack you care about</h2>
        <p className="section__subtitle">
          Languages, frameworks, architecture patterns, and delivery tools—organized the way hiring teams scan a CV.
        </p>
      </motion.div>

      <div className="skills-bento">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.article
            key={group.title}
            className="skills-bento__card"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.48,
              delay: reduceMotion ? 0 : gi * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
          >
            <div className="skills-bento__card-glow" aria-hidden />
            <h3 className="skills-bento__title">{group.title}</h3>
            <ul className="skills-bento__chips">
              {group.items.map((skill, si) => (
                <motion.li
                  key={skill}
                  initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={
                    reduceMotion
                      ? undefined
                      : { type: "spring", stiffness: 380, damping: 22, delay: gi * 0.04 + si * 0.025 }
                  }
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
