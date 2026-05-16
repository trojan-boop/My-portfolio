import { motion, useReducedMotion, useScroll } from "framer-motion";

/** Direct scroll binding — no spring lag while scrolling */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduceMotion) return null;

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      role="progressbar"
      aria-hidden
    />
  );
}
