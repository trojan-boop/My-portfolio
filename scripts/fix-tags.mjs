import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const endDiv = "</" + "div" + ">";

function fixProjects(t) {
  t = t.replace(
    '<motion.div className="mb-4 flex items-start justify-between gap-3">',
    '<div className="mb-4 flex items-start justify-between gap-3">',
  );
  t = t.replace("                  <motion.div>\n                    <h3", "                  <motion.div>\n                    <h3".replace("<motion.div>", "<div>"));
  t = t.replace("                  <motion.div>\n                    <h3", "                  <motion.div>\n                    <h3");
  // direct
  t = t.replace("                  <motion.div>\n                    <h3", "                  <motion.div>\n                    <h3");
  return t;
}

// rewrite entire projects file
const projects = `import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";
import { LOTTIE, PROJECTS } from "../data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { LottiePlayer } from "./LottiePlayer";
import { SectionHeader } from "./ui/SectionHeader";

type ProjectsProps = {
  reduceMotion: boolean;
};

export function Projects({ reduceMotion }: ProjectsProps) {
  return (
    <section id="projects" className="px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeader
          label="Projects"
          title="Production-level builds"
          subtitle="SaaS dashboards, real-time chat, AI streaming assistants, and regulated betting UI."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50"
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-violet-500/10"
                aria-hidden
              />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    {p.subtitle ? (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
                    ) : null}
                  ${endDiv}
                  <span className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-[10px] uppercase tracking-wide text-cyan-600 dark:border-white/10 dark:text-cyan-400">
                    {p.period}
                  </span>
                ${endDiv}

                {p.title.includes("AI") && !reduceMotion ? (
                  <LottiePlayer src={LOTTIE.ai} className="mb-4 h-24 w-24" ariaLabel="AI animation" />
                ) : null}

                <p className="mb-3 text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider">Stack · </span>
                  {p.environment}
                </p>
                <ul className="mb-5 list-disc space-y-2 pl-4 text-sm text-slate-600 dark:text-slate-400">
                  {p.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.demoUrl ? (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400"
                    >
                      <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
                      Live demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400 dark:border-white/10">
                      <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
                      Demo (NDA)
                    </span>
                  )}
                  {p.githubUrl ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium hover:border-cyan-500/50 dark:border-white/15"
                    >
                      <HiCodeBracket className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-xs text-slate-400 dark:border-white/10">
                      <HiCodeBracket className="h-3.5 w-3.5" />
                      Private repo
                    </span>
                  )}
                ${endDiv}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.environment.split(",").map((tag) => (
                    <span
                      key={tag.trim()}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                ${endDiv}
              ${endDiv}
            </motion.article>
          ))}
        ${endDiv}
      </motion.div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(root, "src/components/Projects.tsx"), projects);

let r = fs.readFileSync(path.join(root, "src/components/RecruiterCTA.tsx"), "utf8");
r = r.replace(
  `                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</span>
              </motion.div>`,
  `                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</span>
              ${endDiv}`,
);
r = r.replace("      </motion.div>\n    </section>", `      ${endDiv}\n    </section>`);
fs.writeFileSync(path.join(root, "src/components/RecruiterCTA.tsx"), r);

console.log("ok");
