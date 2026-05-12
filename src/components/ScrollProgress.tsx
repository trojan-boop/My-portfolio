import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 500 : 120,
    damping: reduceMotion ? 60 : 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: "0%" }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-hidden
    />
  );
}
