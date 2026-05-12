import { motion } from "framer-motion";
import { ACHIEVEMENTS, EDUCATION } from "../data/resume";

type EducationProps = {
  reduceMotion: boolean;
};

export function Education({ reduceMotion }: EducationProps) {
  return (
    <section className="section section--education" id="education">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Academics & impact</span>
        <h2 className="section__title">Education and recognitions</h2>
      </motion.div>

      <div className="education__grid">
        <motion.article
          className="education__degree card card--lift"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
        >
          <span className="education__chip">{EDUCATION.period}</span>
          <h3 className="education__school">{EDUCATION.school}</h3>
          <p className="education__degree-title">{EDUCATION.degree}</p>
          <p className="education__gpa">
            <span className="education__gpa-value">{EDUCATION.result}</span>
          </p>
        </motion.article>

        <motion.div
          className="education__achievements"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <h3 className="education__ach-title">Achievements and recognitions</h3>
          <ul className="education__list">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.li
                key={i}
                initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
