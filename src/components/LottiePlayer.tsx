import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";

type LottiePlayerProps = {
  src: string;
  className?: string;
  loop?: boolean;
  ariaLabel?: string;
  lazy?: boolean;
};

export function LottiePlayer({
  src,
  className = "",
  loop = true,
  ariaLabel,
  lazy = false,
}: LottiePlayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<object | null>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  useEffect(() => {
    if (!lazy || shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    let cancelled = false;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, [src, shouldLoad]);

  if (!data) {
    return (
      <div
        ref={ref}
        className={`rounded-2xl bg-slate-200/30 dark:bg-slate-800/40 ${className}`}
        aria-hidden={!ariaLabel}
        aria-label={ariaLabel}
      />
    );
  }

  return (
    <div ref={ref}>
      <Lottie animationData={data} loop={loop} className={className} aria-label={ariaLabel} />
    </div>
  );
}
