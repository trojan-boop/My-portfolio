import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const endDiv = "</" + "div" + ">";

// Contact: panel div closes before outer motion.div
const contactPath = path.join(root, "src/components/Contact.tsx");
let contact = fs.readFileSync(contactPath, "utf8");
contact = contact.replace(
  /(\{PROFILE\.locations\.current\}\s*\n\s*<\/p>\s*\n\s*)<\/motion\.div>(\s*\n\s*<\/motion\.motion\.motion\.div>)/,
  `$1${endDiv}$2`,
);
contact = contact.replace(
  /(\{PROFILE\.locations\.current\}\s*\n\s*<\/p>\s*\n\s*)<\/motion\.motion\.div>(\s*\n\s*<\/motion\.div>)/,
  `$1${endDiv}$2`,
);
// simpler literal replace
contact = contact.replace(
  `          </p>
        </motion.div>
      </motion.div>
    </section>`,
  `          </p>
        ${endDiv}
      </motion.div>
    </section>`,
);

const eduPath = path.join(root, "src/components/Education.tsx");
let edu = fs.readFileSync(eduPath, "utf8");
edu = edu.replace(
  `          </motion.div>
        </motion.div>
      </motion.div>
    </section>`,
  `          </motion.div>
        ${endDiv}
      </motion.div>
    </section>`,
);

fs.writeFileSync(contactPath, contact);
fs.writeFileSync(eduPath, edu);
console.log("fixed", { endDiv });
