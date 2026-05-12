import { PROFILE, SITE } from "../data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} {PROFILE.name}. Crafted with React, R3F, and Framer Motion.
        </p>
        <a className="footer__link" href={SITE.linkedin} target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
