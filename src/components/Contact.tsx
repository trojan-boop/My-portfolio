import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";
import { PROFILE, SITE } from "../data/resume";
import { fadeUp, viewportOnce } from "../lib/motion";
import { ResumeButton } from "./ResumeButton";
import { SectionHeader } from "./ui/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 pb-28 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-cyan-500/10 via-white/80 to-violet-500/10 p-8 md:p-12 dark:border-white/10 dark:from-cyan-500/10 dark:via-slate-900/80 dark:to-violet-500/10">
          <SectionHeader
            label="Contact"
            title="Let's build your next release"
            subtitle="Available for frontend and software engineering roles. I respond quickly and can walk through architecture, performance wins, and shipped features."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900/60"
            >
              <HiOutlineEnvelope className="h-5 w-5 text-cyan-500" />
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900/60"
            >
              <HiOutlinePhone className="h-5 w-5 text-cyan-500" />
              {PROFILE.phoneDisplay}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-900/60"
            >
              <FaLinkedin className="h-5 w-5 text-cyan-500" />
              LinkedIn
            </a>
          </div>
          <div className="mt-8">
            <ResumeButton />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            {PROFILE.name} · {PROFILE.role} · {PROFILE.locations.current}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
