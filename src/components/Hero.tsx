import { motion, type Variants } from "framer-motion";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LOTTIE, PROFILE, TYPING_ROLES } from "../data/resume";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { fadeUp } from "../lib/motion";
import { FloatingTech } from "./FloatingTech";
import { LottiePlayer } from "./LottiePlayer";
import { ResumeButton } from "./ResumeButton";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

type HeroProps = {
  reduceMotion: boolean;
  lowPower?: boolean;
  effectsReady?: boolean;
};

export function Hero({ reduceMotion, lowPower = false, effectsReady = false }: HeroProps) {
  const lite = reduceMotion || lowPower;
  const showEffects = effectsReady && !lite;
  const typedRole = useTypingEffect(TYPING_ROLES, { speed: 65, pause: 2000, enabled: !lite });
  const variants = lite
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.25 } } }
    : containerVariants;
  const childVariants = lite
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : itemVariants;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 md:px-8 lg:px-12"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 ${showEffects ? "hero-gradient-live" : "opacity-80"}`}
        aria-hidden
      />
      <FloatingTech enabled={showEffects} />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={childVariants}>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-300">
              {PROFILE.yearsExperience} yrs · {PROFILE.locations.current}
            </span>
            <span className="rounded-full border border-slate-300/60 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-400">
              Open to frontend roles
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500">Frontend · Angular · React</p>
          <h1 className="mt-3 font-display text-5xl font-normal leading-[1.08] tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
            {PROFILE.name}
          </h1>
          <p className="mt-4 min-h-[2rem] text-lg text-slate-600 md:text-xl dark:text-slate-300">
            <span className="text-slate-500 dark:text-slate-500">I build as a </span>
            <span className="font-medium text-cyan-600 dark:text-cyan-400">
              {lite ? PROFILE.role : typedRole}
              {!lite && <span className="animate-pulse">|</span>}
            </span>
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {PROFILE.focus}. SaaS, CRM, EdTech, and AI assistants with streaming UX, NgRx/Redux, and enterprise
            dashboards.
          </p>

          <motion.div className="mt-8 flex flex-wrap gap-3">
            <ResumeButton />
            <motion.a
              href="#projects"
              className="inline-flex items-center rounded-full border border-slate-300/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-cyan-500/40 dark:border-white/15 dark:text-slate-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
            </motion.a>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-slate-600 hover:text-cyan-600 dark:text-slate-400"
              whileHover={{ x: 2 }}
            >
              <HiOutlineEnvelope className="h-4 w-4" />
              Email
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          variants={childVariants}
        >
          <motion.div
            className="rounded-3xl border border-slate-200/80 bg-white/50 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40"
            whileHover={lite ? undefined : { y: -4, transition: { duration: 0.25 } }}
          >
            {showEffects ? (
              <LottiePlayer
                src={LOTTIE.hero}
                className="mx-auto h-64 w-full md:h-72"
                ariaLabel="Developer animation"
                lazy
              />
            ) : (
              <motion.div
                className="flex h-64 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800/50"
                variants={fadeUp}
              >
                <p className="text-center text-sm text-slate-500">Angular · React · TypeScript</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {showEffects && (
        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
        >
          Scroll
          <motion.span
            className="block h-8 w-px bg-gradient-to-b from-cyan-500/80 to-transparent"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
