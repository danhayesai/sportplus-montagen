import { readdirSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';

/**
 * Generates responsive WebP variants for every JPEG/PNG under public/, and a
 * manifest of which widths exist, which Figure.astro turns into a srcset.
 *
 * Without this the gallery served 1600px originals into roughly 400px grid
 * slots - about 1.2 MB of wasted transfer on the references page alone, which
 * is what pushed it below the performance floor in CI.
 *
 * Runs as part of `npm run build` rather than being committed, so a variant can
 * never go stale: replace a JPEG, rebuild, and every width is regenerated from
 * the new file.
 */

const ROOTS = ['public/images', 'public/brand'];
const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

/**
 * Ladder from a small UI mark up to a full-width hero at 2x density.
 *
 * The steps matter as much as the range: a 480/960 ladder made a phone that
 * needed ~660px jump to 960 and waste a third of the download. Closer spacing
 * in the middle is where the actual saving is. 128 exists for the header
 * wordmark, which renders at about 37px.
 */
const WIDTHS = [128, 400, 600, 800, 1200, 1600];

const MANIFEST_PATH = 'src/data/image-manifest.json';

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
const manifest = {};

for (const root of ROOTS) {
  for (const source of walk(root)) {
    if (!SOURCE_EXTENSIONS.has(extname(source).toLowerCase())) continue;

    const { width: intrinsicWidth } = await sharp(source).metadata();
    if (!intrinsicWidth) continue;

    // Never upscale: only ladder widths below the original, plus the original.
    const widths = [
      ...WIDTHS.filter((w) => w < intrinsicWidth),
      intrinsicWidth,
    ];

    // Public URL of the source, used as the manifest key and by Figure.
    // Separators are normalised first: on Windows `join` produces backslashes,
    // so stripping the "public/" prefix has to happen after, not before.
    const publicPath =
      '/' + source.replace(/\\/g, '/').replace(/^public\//, '');
    manifest[publicPath] = widths;

    for (const width of widths) {
      const target = source.replace(/\.(jpe?g|png)$/i, `-${width}.webp`);

      // Only regenerate when the source is newer, so repeat builds stay fast.
      if (
        existsSync(target) &&
        statSync(target).mtimeMs >= statSync(source).mtimeMs
      ) {
        skipped++;
        continue;
      }

      await sharp(source)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(target);
      created++;
    }
  }
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

console.log(
  `webp: ${created} generated, ${skipped} up to date, ` +
    `${Object.keys(manifest).length} images in manifest`
);
