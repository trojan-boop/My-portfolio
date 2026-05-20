import { useEffect, type ReactNode } from "react";

/** Portfolio uses a fixed dark theme (theme toggle removed from nav). */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  return <>{children}</>;
}
