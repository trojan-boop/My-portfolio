import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { SectionHeader } from "./ui/SectionHeader";

type ExperienceProps = {
  reduceMotion: boolean;
};

export function Experience({ reduceMotion }: ExperienceProps) {
  return (
    <section id="experience" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeader
          asStaggerChild
          label="Experience"
          title="Where I have shipped"
          subtitle="Drabito Technologies and Emminence Innovation—SaaS EdTech, AI assistants, gaming, and CRM platforms."
        />

        <ol className="relative mt-4 space-y-8 border-l border-slate-200 pl-8 dark:border-slate-700">
          {EXPERIENCE.map((job) => (
            <motion.li
              key={job.company}
              className="relative"
              variants={fadeUp}
              initial={reduceMotion ? false : undefined}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={viewportOnce}
            >
              <span className="absolute -left-[2.15rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-950 ring-4 ring-slate-100 dark:ring-slate-900" />
              <article className="rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50">
                <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                  <motion.div whileHover={reduceMotion ? undefined : { x: 4 }}>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.company}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">{job.role}</p>
                    {job.product ? (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.product}</p>
                    ) : null}
                  </motion.div>
                  <motion.div className="text-left text-sm md:text-right" variants={fadeUp}>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{job.period}</p>
                    <p className="text-slate-500">{job.location}</p>
                  </motion.div>
                </div>
                {job.environment ? (
                  <p className="mt-3 text-xs text-slate-500">
                    <span className="uppercase tracking-wider">Stack · </span>
                    {job.environment}
                  </p>
                ) : null}
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.highlights.map((line, hi) => (
                    <li key={`${job.company}-${hi}`}>{line}</li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
