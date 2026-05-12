import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Scene } from "./components/Scene";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  const reduceMotion = useReducedMotion();
  const [lowPower, setLowPower] = useState(() => {
    if (typeof window === "undefined") return false;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mq.matches;
  });

  return (
    <div className="app">
      <ScrollProgress />

      <div className="canvas-layer" aria-hidden>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 42 }}
          dpr={reduceMotion || lowPower ? [1, 1] : [1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene lowPower={reduceMotion || lowPower} />
          </Suspense>
        </Canvas>
      </div>

      <div className="noise-overlay" aria-hidden />

      <Nav lowPower={lowPower} onToggleLowPower={() => setLowPower((v) => !v)} />

      <main className="content">
        <Hero reduceMotion={!!reduceMotion} />
        <About />
        <Skills reduceMotion={!!reduceMotion} />
        <Experience reduceMotion={!!reduceMotion} />
        <Projects reduceMotion={!!reduceMotion} />
        <Education reduceMotion={!!reduceMotion} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
