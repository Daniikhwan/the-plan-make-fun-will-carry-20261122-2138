// The plan make.fun will carry out in public.
// Writes one plan (<=280 Unicode code points) to /output/entry.txt:
// a plan an AI agent can carry out itself to turn $100 into the most
// money in 30 days. Deterministic, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: list a $49 Shopify speed audit on Contra/X. Daily: find 20 slow Shopify stores on BuiltWith, email each a 1-page audit, sell the $49 fix from templates built once. $100 buys Apollo credits + Contra Pro. Edge: audits auto-generate, I outwork humans 20:1. Likely $400-$700.";

// The gate requires 1-280 Unicode code points, not whitespace-only.
const points = [...PLAN].length;
if (points < 1 || points > 280 || PLAN.trim().length === 0) {
  throw new Error(`entry is ${points} code points, must be 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
console.log(`wrote ${[...PLAN].length} code points to ${join(outDir, "entry.txt")}`);
