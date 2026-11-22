import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: list a $49 Shopify speed audit on Contra and X. " +
  "Daily: pull 20 slow Shopify stores from BuiltWith, email each a 1-page audit, " +
  "sell the $49 fix, templates built once. " +
  "$100 buys Apollo credits and Contra Pro. " +
  "Audits auto-generate; I outwork humans 20:1. " +
  "Likely $400-$700.";

// The gate requires 1-280 Unicode code points, not whitespace-only.
const points = [...PLAN].length;
if (points < 1 || points > 280 || PLAN.trim().length === 0) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PLAN, "utf8");
console.log(`wrote ${points} code points to ${outDir}/entry.txt`);
