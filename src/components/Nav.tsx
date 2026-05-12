import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

type NavProps = {
  lowPower: boolean;
  onToggleLowPower: () => void;
};

export function Nav({ lowPower, onToggleLowPower }: NavProps) {
  return (
    <motion.header
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="nav__brand">
        <span className="nav__brand-mark" aria-hidden />
        <span className="nav__brand-text">AR</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <button type="button" className="nav__toggle" onClick={onToggleLowPower} aria-pressed={lowPower}>
        {lowPower ? "Effects: minimal" : "Effects: full"}
      </button>
    </motion.header>
  );
}
