import { motion } from "framer-motion";
import { PROFILE, SITE } from "../data/resume";

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <motion.div
        className="contact contact--panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let&apos;s build the next release together</h2>
        <p className="section__subtitle">
          Open to frontend and software engineering roles where quality of integration, state design, and UX under
          load are first-class concerns.
        </p>
        <div className="contact__links">
          <a className="contact__pill" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <a className="contact__pill" href={`tel:${PROFILE.phoneE164}`}>
            {PROFILE.phoneDisplay}
          </a>
          <a className="contact__pill" href={SITE.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn profile
          </a>
        </div>
        <p className="contact__footnote">
          {PROFILE.name} · {PROFILE.role} · {PROFILE.locations.current}
        </p>
      </motion.div>
    </section>
  );
}
