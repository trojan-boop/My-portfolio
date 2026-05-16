import { useEffect, useState } from "react";

export function useTypingEffect(
  words: readonly string[],
  options?: { speed?: number; pause?: number; enabled?: boolean },
) {
  const speed = options?.speed ?? 70;
  const pause = options?.pause ?? 1800;
  const enabled = options?.enabled ?? true;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled || !words.length) return;
    const current = words[wordIndex % words.length] ?? "";

    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            window.setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, Math.max(0, text.length - 1));
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, text, deleting, speed, pause, enabled]);

  if (!enabled) return words[0] ?? "";
  return text;
}
