import { motion } from "framer-motion";
import { PROFILE } from "../data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 88, damping: 17 } },
};

type HeroProps = {
  reduceMotion: boolean;
};

export function Hero({ reduceMotion }: HeroProps) {
  const variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.25 } } }
    : container;
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : item;

  return (
    <section className="hero" id="top">
      <div className="hero__aurora" aria-hidden>
        <span className="hero__aurora-blob hero__aurora-blob--a" />
        <span className="hero__aurora-blob hero__aurora-blob--b" />
        <span className="hero__aurora-blob hero__aurora-blob--c" />
      </div>
      <div className="hero__grid" />

      <motion.div
        className="hero__inner"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__badge-row" variants={itemVariants}>
          <span className="hero__badge">{PROFILE.yearsExperience} years experience</span>
          <span className="hero__badge hero__badge--outline">{PROFILE.locations.current}</span>
        </motion.div>

        <motion.p className="hero__eyebrow" variants={itemVariants}>
          {PROFILE.role}
        </motion.p>
        <motion.h1 className="hero__title" variants={itemVariants}>
          {PROFILE.name}
        </motion.h1>
        <motion.p className="hero__tagline" variants={itemVariants}>
          {PROFILE.focus}
        </motion.p>
        <motion.p className="hero__lead" variants={itemVariants}>
          Angular and React product engineer for SaaS, EdTech, and enterprise dashboards—REST and streaming APIs,
          NgRx and Redux, performance tuning, and interfaces that stay calm under real data loads.
        </motion.p>

        <motion.div className="hero__stats" variants={itemVariants}>
          <div className="hero__stat">
            <span className="hero__stat-value">50+</span>
            <span className="hero__stat-label">REST integrations</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">~40%</span>
            <span className="hero__stat-label">Dashboard load improvement</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">35–50%</span>
            <span className="hero__stat-label">Fewer redundant API calls</span>
          </div>
        </motion.div>

        <motion.div className="hero__actions" variants={itemVariants}>
          <motion.a
            className="btn btn--primary"
            href="#projects"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            View projects
          </motion.a>
          <motion.a
            className="btn btn--ghost"
            href="#contact"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      {!reduceMotion && (
        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <span>Scroll</span>
          <motion.span
            className="hero__scroll-line"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
