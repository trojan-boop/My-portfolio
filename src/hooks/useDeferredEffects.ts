import { useEffect, useState } from "react";

/**
 * Delays decorative work (WebGL, Lottie, floating icons) until the page is interactive.
 * Enables early on scroll or first interaction so engaged users still get effects quickly.
 */
export function useDeferredEffects(options?: { minDelayMs?: number; idleTimeoutMs?: number }) {
  const minDelayMs = options?.minDelayMs ?? 500;
  const idleTimeoutMs = options?.idleTimeoutMs ?? 2500;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    const t = window.setTimeout(enable, minDelayMs);
    let idleId = 0;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: idleTimeoutMs });
    }

    const onEarly = () => enable();
    window.addEventListener("scroll", onEarly, { once: true, passive: true });
    window.addEventListener("pointerdown", onEarly, { once: true, passive: true });

    return () => {
      cancelled = true;
      window.clearTimeout(t);
      if (idleId) window.cancelIdleCallback(idleId);
      window.removeEventListener("scroll", onEarly);
      window.removeEventListener("pointerdown", onEarly);
    };
  }, [ready, minDelayMs, idleTimeoutMs]);

  return ready;
}
