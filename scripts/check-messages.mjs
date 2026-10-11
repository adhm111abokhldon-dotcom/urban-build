/**
 * Small QA helper: verifies that every locale exposes the same message keys.
 *
 *   node scripts/check-messages.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const messagesDir = join(process.cwd(), "messages");

/** Flattens nested objects into dotted key paths. */
function flatten(value, prefix = "") {
  if (Array.isArray(value)) return [prefix];
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      flatten(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

const files = readdirSync(messagesDir).filter((file) => file.endsWith(".json"));
const catalogs = files.map((file) => ({
  locale: file.replace(".json", ""),
  keys: flatten(JSON.parse(readFileSync(join(messagesDir, file), "utf8"))),
}));

const [reference, ...others] = catalogs;
let failed = false;

for (const catalog of others) {
  const missing = reference.keys.filter((key) => !catalog.keys.includes(key));
  const extra = catalog.keys.filter((key) => !reference.keys.includes(key));

  if (missing.length > 0 || extra.length > 0) {
    failed = true;
    console.error(`\n${catalog.locale}:`);
    if (missing.length > 0) console.error(`  missing: ${missing.join(", ")}`);
    if (extra.length > 0) console.error(`  extra:   ${extra.join(", ")}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log(
  `Messages OK — ${catalogs.length} locales, ${reference.keys.length} keys each (${reference.locale} as reference).`,
);
