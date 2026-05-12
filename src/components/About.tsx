import { motion } from "framer-motion";
import { PROFILE } from "../data/resume";

export function About() {
  return (
    <section className="section section--about" id="about">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Profile</span>
        <h2 className="section__title">Summary and objective</h2>
      </motion.div>

      <div className="about__grid about__grid--profile">
        <motion.article
          className="card card--lift card--summary"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.52, delay: 0.04 }}
        >
          <h3 className="card__title">Profile summary</h3>
          <p className="card__body">{PROFILE.summary}</p>
        </motion.article>
        <motion.article
          className="card card--lift card--objective"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.52, delay: 0.1 }}
        >
          <h3 className="card__title">Career objective</h3>
          <p className="card__body">{PROFILE.objective}</p>
        </motion.article>
      </div>
    </section>
  );
}
