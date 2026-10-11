/**
 * One-off asset pass: re-encodes the oversized source images that shipped with
 * the project (a 7.8 MB hero PNG named `.jpg`, four ~2 MB PNG "jpegs", …).
 *
 *   npm run assets:optimize
 *
 * `sharp` ships with Next.js, so no extra dependency is needed. The script is
 * committed so the originals can always be re-derived from git history.
 */
import { readdir, rename, stat, unlink } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const assetsDir = join(process.cwd(), "public/assets");

/** [file, { width?, quality }] */
const targets = [
  ["img/hero/bg.jpg", { width: 2560, quality: 72 }],
  ["img/about/img.jpg", { quality: 76 }],
  ["img/testimonials/img.jpg", { quality: 76 }],
  ["img/work/restoration.jpg", { quality: 78 }],
  ["img/work/construction.jpg", { quality: 78 }],
  ["img/work/renovation.jpg", { quality: 78 }],
  ["img/work/consulting.jpg", { quality: 78 }],
  ["img/services/thumb-1.jpg", { quality: 80 }],
  ["img/services/thumb-2.jpg", { quality: 80 }],
  ["img/services/thumb-3.jpg", { quality: 80 }],
  ["img/services/thumb-4.jpg", { quality: 80 }],
  ["img/services/thumb-5.jpg", { quality: 80 }],
];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

for (const [relativePath, { width, quality }] of targets) {
  const file = join(assetsDir, relativePath);
  const before = (await stat(file)).size;

  let pipeline = sharp(file).rotate();
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });

  // Encode next to the original, then replace it so the file keeps its name.
  const temporaryFile = `${file}.optimized.jpg`;

  await pipeline
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(temporaryFile);

  await rename(temporaryFile, file);

  const after = (await stat(file)).size;

  console.log(
    `${relativePath.padEnd(32)} ${kb(before).padStart(8)} → ${kb(after).padStart(8)}`,
  );
}

// Assets that are no longer referenced anywhere in the app.
const unused = [
  "img/hero/bg2.jpg",
  "img/testimonials/avatar.jpg",
  "logo.png",
];

for (const relativePath of unused) {
  const file = join(assetsDir, relativePath);
  try {
    await unlink(file);
    console.log(`${relativePath.padEnd(32)} removed (unused)`);
  } catch {
    // Already gone — nothing to do.
  }
}

const remaining = await readdir(join(assetsDir, "img/hero"));
console.log(`\nHero directory now contains: ${remaining.join(", ")}`);
