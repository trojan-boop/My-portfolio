/** Prefer reduced GPU/animation work on mobile, slow devices, or user OS settings. */
export function getDefaultLiteMode(): boolean {
  if (typeof window === "undefined") return false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  if (conn?.saveData) return true;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") return true;

  return false;
}
