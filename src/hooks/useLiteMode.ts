/** Prefer reduced GPU/animation work on mobile, slow devices, or user OS settings. */
export function getDefaultLiteMode(): boolean {
  if (typeof window === "undefined") return false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (window.matchMedia("(max-width: 767px)").matches) return true;

  const cores = navigator.hardwareConcurrency;
  if (cores !== undefined && cores <= 4) return true;

  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  if (conn?.saveData) return true;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") return true;

  return false;
}
