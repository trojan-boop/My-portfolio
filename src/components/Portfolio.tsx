"use client";

import dynamic from "next/dynamic";
import { Suspense, useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { About } from "./About";
import { Contact } from "./Contact";
import { CustomCursor } from "./CustomCursor";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { PageLoader } from "./PageLoader";
import { Projects } from "./Projects";
import { RecruiterCTA } from "./RecruiterCTA";
import { ScrollProgress } from "./ScrollProgress";
import { Skills } from "./Skills";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useDeferredEffects } from "@/hooks/useDeferredEffects";
import { getDefaultLiteMode } from "@/hooks/useLiteMode";
import { pageEnter } from "@/lib/motion";

const BackgroundCanvas = dynamic(() => import("./BackgroundCanvas"), {
  ssr: false,
});

export function Portfolio() {
  const reduceMotion = useReducedMotion();
  const [lowPower, setLowPower] = useState(getDefaultLiteMode);
  const [showLoader, setShowLoader] = useState(true);
  const effectsReady = useDeferredEffects({ minDelayMs: 600, idleTimeoutMs: 3000 });

  const onLoaderDone = useCallback(() => {
    setShowLoader(false);
  }, []);

  const decorationsOff = !!reduceMotion || lowPower;
  const showBackground = effectsReady && !reduceMotion;
  const showDecorations = effectsReady && !decorationsOff;

  return (
    <ThemeProvider>
      {showLoader ? <PageLoader onComplete={onLoaderDone} /> : null}

      <div className="relative min-h-screen">
        <ScrollProgress />
        {showDecorations ? <CustomCursor /> : null}

        <div
          className={`canvas-layer transition-opacity duration-700 ${showBackground ? "opacity-100" : "opacity-0"}`}
          aria-hidden
        >
          {showBackground ? (
            <Suspense fallback={null}>
              <BackgroundCanvas lowPower={lowPower} />
            </Suspense>
          ) : null}
        </div>

        {showDecorations ? <div className="noise-overlay" aria-hidden /> : null}

        <Nav lowPower={lowPower} onToggleLowPower={() => setLowPower((v) => !v)} />

        <motion.main
          className="relative z-10"
          initial={pageEnter.initial}
          animate={pageEnter.animate}
          transition={pageEnter.transition}
        >
          <Hero
            reduceMotion={!!reduceMotion}
            lowPower={lowPower}
            effectsReady={showDecorations}
          />
          <About />
          <RecruiterCTA />
          <Skills reduceMotion={!!reduceMotion || decorationsOff} />
          <Experience reduceMotion={!!reduceMotion || decorationsOff} />
          <Projects reduceMotion={!!reduceMotion || decorationsOff} />
          <Education reduceMotion={!!reduceMotion || decorationsOff} />
          <Contact />
          <Footer />
        </motion.main>
      </div>
    </ThemeProvider>
  );
}
