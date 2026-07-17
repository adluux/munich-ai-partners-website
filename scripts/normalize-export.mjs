import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const pages = [
  "case-study-urbanpoint.html",
  "case-study-starise-ai.html",
  "case-study-fastreview.html",
  "legal.html",
  "privacy.html",
  "de/case-study-urbanpoint.html",
  "de/case-study-starise-ai.html",
  "de/case-study-fastreview.html",
  "de/legal.html",
  "de/privacy.html",
];

for (const page of pages) {
  const source = join(process.cwd(), "out", `${page}.html`);
  const target = join(process.cwd(), "out", page);

  if (existsSync(source)) {
    copyFileSync(source, target);
  }
}
