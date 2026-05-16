import type { Transition, Variants } from "framer-motion";

/** Snappy easing — less floaty than heavy spring defaults */
export const easeOut = [0.25, 0.1, 0.25, 1] as const;

export const tweenFast: Transition = { duration: 0.32, ease: easeOut };
export const tweenMedium: Transition = { duration: 0.42, ease: easeOut };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: tweenFast,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: tweenFast },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
};

export const scaleHover = {
  whileHover: { scale: 1.015, transition: { duration: 0.2 } },
  whileTap: { scale: 0.99, transition: { duration: 0.15 } },
};

/** Trigger slightly before full enter — feels responsive without animating entire scroll */
export const viewportOnce = { once: true, margin: "-40px" as const, amount: 0.12 as const };

export const pageEnter = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, ease: easeOut },
};
