import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mqFine.matches && !mqMotion.matches);
    update();
    mqFine.addEventListener("change", update);
    mqMotion.addEventListener("change", update);
    return () => {
      mqFine.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      aria-hidden
    >
      <div className="h-8 w-8 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm" />
    </motion.div>
  );
}
