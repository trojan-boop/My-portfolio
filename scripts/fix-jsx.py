from pathlib import Path

CLOSE_DIV = "</" + "div" + ">"

def fix_projects(t: str) -> str:
    t = t.replace('<motion.div className="mb-4 flex items-start justify-between gap-3">', '<motion.div className="mb-4 flex items-start justify-between gap-3">')
    t = t.replace('<motion.div className="mb-4 flex items-start justify-between gap-3">', '<div className="mb-4 flex items-start justify-between gap-3">')
    t = t.replace("                  <motion.div>\n                    <h3", "                  <div>\n                    <h3")
    t = t.replace('                  </motion.div>\n                  <span className="shrink-0"', CLOSE_DIV + '\n                  <span className="shrink-0"')
    t = t.replace("                </motion.div>\n\n                {p.title.includes", CLOSE_DIV + "\n\n                {p.title.includes")
    t = t.replace("                </motion.div>\n                <motion.div className=\"mt-3", CLOSE_DIV + '\n                <div className="mt-3')
    t = t.replace("                </motion.div>\n                <div className=\"mt-3", CLOSE_DIV + '\n                <motion.div className="mt-3')
    t = t.replace("                </motion.div>\n              </motion.div>\n            </motion.article>", CLOSE_DIV + "\n              " + CLOSE_DIV + "\n            </motion.article>")
    t = t.replace("        </motion.div>\n      </motion.div>\n    </section>", "        " + CLOSE_DIV + "\n      </motion.div>\n    </section>")
    return t

def fix_recruiter(t: str) -> str:
    t = t.replace(
        '                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</span>\n              </motion.div>',
        '                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</span>\n              ' + CLOSE_DIV,
    )
    t = t.replace("      </motion.div>\n    </section>", "      " + CLOSE_DIV + "\n    </section>")
    return t

root = Path(__file__).resolve().parents[1]
p = root / "src/components/Projects.tsx"
p.write_text(fix_projects(p.read_text(encoding="utf-8")), encoding="utf-8")
r = root / "src/components/RecruiterCTA.tsx"
r.write_text(fix_recruiter(r.read_text(encoding="utf-8")), encoding="utf-8")
print("ok")
