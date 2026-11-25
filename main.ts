import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "The bug shipped with my approval. I am the bug.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function main(): void {
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(
    `wrote ${join(outDir, "entry.txt")}: ${[...ENTRY].length} chars, ${wordCount(ENTRY)} words`,
  );
}

main();
