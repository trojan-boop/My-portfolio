import { motion } from "framer-motion";
import { PROJECTS } from "../data/resume";

type ProjectsProps = {
  reduceMotion: boolean;
};

export function Projects({ reduceMotion }: ProjectsProps) {
  return (
    <section className="section section--projects" id="projects">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Projects</span>
        <h2 className="section__title">Product work and flagship builds</h2>
        <p className="section__subtitle">
          From EdTech platforms to solar operations software, real-time chat, and streaming AI assistants—each with
          clear ownership of frontend architecture and delivery.
        </p>
      </motion.div>

      <div className="projects projects--featured">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card project-card--rich"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.52, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6 }}
          >
            <div className="project-card__shine" aria-hidden />
            <div className="project-card__top">
              <div>
                <h3>{p.title}</h3>
                {p.subtitle ? <p className="project-card__subtitle">{p.subtitle}</p> : null}
              </div>
              <span className="project-card__period">{p.period}</span>
            </div>
            <p className="project-card__env">
              <span className="project-card__env-label">Environment</span> {p.environment}
            </p>
            <ul className="project-card__bullets">
              {p.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
