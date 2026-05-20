import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type PageLoaderProps = {
  onComplete: () => void;
};

/** Minimal splash — no backdrop blur (GPU-heavy on first paint) */
export function PageLoader({ onComplete }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    const t = window.setTimeout(hide, 200);
    if (document.readyState === "complete") {
      window.setTimeout(hide, 80);
    } else {
      window.addEventListener("DOMContentLoaded", hide, { once: true });
    }
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("DOMContentLoaded", hide);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      const t = window.setTimeout(onComplete, 80);
      return () => window.clearTimeout(t);
    }
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06080c]/92"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/25 border-t-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Loading</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
