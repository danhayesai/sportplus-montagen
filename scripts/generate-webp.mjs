import { readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import sharp from 'sharp';

/**
 * Generates a WebP twin for every JPEG/PNG under public/, which Figure.astro
 * offers to the browser ahead of the original.
 *
 * This runs as part of `npm run build` rather than being committed, so a WebP
 * can never go stale: replace hero.jpg, rebuild, and hero.webp is regenerated
 * from the new file. Committing them instead would risk the site serving last
 * month's photo to every modern browser while the JPEG showed the new one.
 */

const ROOTS = ['public/images', 'public/brand'];
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let created = 0;
let skipped = 0;
let savedBytes = 0;

for (const root of ROOTS) {
  for (const source of walk(root)) {
    if (!SOURCE_EXTENSIONS.has(extname(source).toLowerCase())) continue;

    const target = source.replace(/\.(jpe?g|png)$/i, '.webp');

    // Only regenerate when the source is newer, so repeat builds stay fast.
    if (existsSync(target) && statSync(target).mtimeMs >= statSync(source).mtimeMs) {
      skipped++;
      continue;
    }

    await sharp(source).webp({ quality: 80, effort: 4 }).toFile(target);
    created++;
    savedBytes += statSync(source).size - statSync(target).size;
  }
}

console.log(
  `webp: ${created} generated, ${skipped} up to date` +
    (created ? `, ${Math.round(savedBytes / 1024)} KB saved` : '')
);
