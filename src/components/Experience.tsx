import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/resume";

type ExperienceProps = {
  reduceMotion: boolean;
};

export function Experience({ reduceMotion }: ExperienceProps) {
  return (
    <section className="section section--experience" id="experience">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Experience</span>
        <h2 className="section__title">Where I have shipped</h2>
        <p className="section__subtitle">
          Enterprise SaaS, EdTech, and React product work with measurable impact on performance and reliability.
        </p>
      </motion.div>

      <ol className="timeline">
        {EXPERIENCE.map((job, index) => (
          <motion.li
            key={job.company}
            className="timeline__item"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline__marker" aria-hidden />
            <article className="timeline__card">
              <header className="timeline__head">
                <div>
                  <h3 className="timeline__company">{job.company}</h3>
                  <p className="timeline__role">{job.role}</p>
                  {job.product ? <p className="timeline__product">{job.product}</p> : null}
                </div>
                <div className="timeline__meta">
                  <span className="timeline__period">{job.period}</span>
                  <span className="timeline__location">{job.location}</span>
                </div>
              </header>
              {job.environment ? (
                <p className="timeline__env">
                  <span className="timeline__env-label">Stack</span> {job.environment}
                </p>
              ) : null}
              <ul className="timeline__bullets">
                {job.highlights.map((line, hi) => (
                  <li key={`${job.company}-${hi}`}>{line}</li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
