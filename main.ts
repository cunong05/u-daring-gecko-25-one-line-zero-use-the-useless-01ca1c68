import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one file: the harness reads /output/entry.txt and the judge
// scores the line on funniness, freshness and neat wording.
const ENTRY =
  "My superpower is knowing exactly when the microwave will beep — one second before it beeps, every single time, and I can do nothing with this information.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
