import { motion } from "framer-motion";
import { PROFILE } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <SectionHeader
          asStaggerChild
          label="Profile"
          title="Summary and objective"
          subtitle="Frontend engineer focused on scalable SaaS, CRM, EdTech, and AI-powered interfaces."
        />
        <motion.div className="grid gap-5 md:grid-cols-2" variants={fadeUp}>
          <GlassCard>
            <h3 className="heading-card text-slate-900 dark:text-white">Profile Summary</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{PROFILE.summary}</p>
          </GlassCard>
          <GlassCard className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <h3 className="heading-card text-slate-900 dark:text-white">Career Objective</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{PROFILE.objective}</p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
