import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type PageLoaderProps = {
  onComplete: () => void;
};

/** Brief branded splash — does not block parsing; total time ~350ms */
export function PageLoader({ onComplete }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    const t = window.setTimeout(hide, 320);
    if (document.readyState === "complete") {
      window.setTimeout(hide, 180);
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", hide);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      const t = window.setTimeout(onComplete, 120);
      return () => window.clearTimeout(t);
    }
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06080c]/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="h-9 w-9 rounded-full border-2 border-cyan-500/30 border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Loading</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
