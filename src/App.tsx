import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/CustomCursor";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { PageLoader } from "./components/PageLoader";
import { Projects } from "./components/Projects";
import { RecruiterCTA } from "./components/RecruiterCTA";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { ThemeProvider } from "./context/ThemeProvider";
import { getDefaultLiteMode } from "./hooks/useLiteMode";
import { pageEnter } from "./lib/motion";

const BackgroundCanvas = lazy(() => import("./components/BackgroundCanvas"));

export default function App() {
  const reduceMotion = useReducedMotion();
  const [lowPower, setLowPower] = useState(getDefaultLiteMode);
  const [showLoader, setShowLoader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [canvasOn, setCanvasOn] = useState(false);

  const onLoaderDone = useCallback(() => {
    setShowLoader(false);
  }, []);

  // Main content paints immediately; loader is a short overlay only
  useEffect(() => {
    setContentVisible(true);
  }, []);

  const effectsOff = !!reduceMotion || lowPower;

  // Defer WebGL until after first paint / idle — page stays interactive
  useEffect(() => {
    const enable = () => setCanvasOn(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(enable, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      {showLoader ? <PageLoader onComplete={onLoaderDone} /> : null}

      <div className="relative min-h-screen">
        <ScrollProgress />
        {!effectsOff ? <CustomCursor /> : null}

        <motion.div className="canvas-layer" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: canvasOn ? 1 : 0 }} transition={{ duration: 0.45 }}>
          {canvasOn ? (
            <Suspense fallback={null}>
              <BackgroundCanvas lowPower={effectsOff} />
            </Suspense>
          ) : null}
        </motion.div>

        {!effectsOff ? <div className="noise-overlay" aria-hidden /> : null}

        <Nav lowPower={lowPower} onToggleLowPower={() => setLowPower((v) => !v)} />

        <motion.main
          className="relative z-10"
          initial={pageEnter.initial}
          animate={contentVisible ? pageEnter.animate : pageEnter.initial}
          transition={pageEnter.transition}
        >
          <Hero reduceMotion={!!reduceMotion} lowPower={lowPower} />
          <About />
          <RecruiterCTA />
          <Skills reduceMotion={!!reduceMotion || effectsOff} />
          <Experience reduceMotion={!!reduceMotion || effectsOff} />
          <Projects reduceMotion={!!reduceMotion || effectsOff} />
          <Education reduceMotion={!!reduceMotion || effectsOff} />
          <Contact />
          <Footer />
        </motion.main>
      </div>
    </ThemeProvider>
  );
}
