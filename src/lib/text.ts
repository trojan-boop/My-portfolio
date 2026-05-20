/** Title Case for UI headings (keeps short conjunctions lowercase). */
export function toTitleCase(value: string): string {
  const lower = new Set(["and", "or", "the", "a", "an", "at", "for", "in", "of", "to", "with"]);
  return value
    .split(/\s+/)
    .map((word, i) => {
      const bare = word.replace(/[^a-zA-Z0-9&]/g, "").toLowerCase();
      if (i > 0 && lower.has(bare)) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
