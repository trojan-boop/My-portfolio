import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import { ACHIEVEMENTS, RECRUITER_METRICS } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function RecruiterCTA() {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:px-12" id="highlights" aria-labelledby="highlights-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="For recruiters"
          title="Impact at a glance"
          subtitle="Enterprise SaaS, CRM, EdTech, and AI-assisted products—delivered with measurable frontend outcomes."
        />

        <motion.div
          className="mb-10 grid gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {RECRUITER_METRICS.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <GlassCard hover className="text-center">
                <p className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={"decimals" in m ? m.decimals : 0}
                  />
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{m.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul
          className="grid gap-3 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ACHIEVEMENTS.map((item, i) => (
            <motion.li key={i} variants={fadeUp}>
              <div className="flex gap-3 rounded-xl border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-slate-900/40">
                <HiOutlineSparkles className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" aria-hidden />
                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
