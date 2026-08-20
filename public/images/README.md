# Images

All photography here was recovered from the previous website, then resized and
recompressed for web use. The originals were 4640 x 3472 camera files totalling
233 MB; this folder is about 18 MB.

Files here are served from the site root, so `public/images/hero.jpg` is
reachable at `/images/hero.jpg`.

## Slots currently in use

These filenames are referenced directly by the pages. Replacing a file swaps the
picture on the site — no code change needed.

| File                     | Size (px)  | Used on             |
| ------------------------ | ---------- | ------------------- |
| `hero.jpg`               | 1600 x 900 | Home, hero          |
| `sports-halls.jpg`       | 1200 x 900 | Home, sector card   |
| `hotels.jpg`             | 1200 x 900 | Home, sector card   |
| `timber-houses.jpg`      | 1200 x 900 | Home, sector card   |
| `sports-halls-1..3.jpg`  | 1200 x 900 | References gallery  |
| `hotels-1..3.jpg`        | 1200 x 900 | References gallery  |
| `timber-houses-1..3.jpg` | 1200 x 900 | References gallery  |
| `team.jpg`               | 1200 x 900 | About page          |

## The library

`library/` holds every usable photograph recovered from the old site, capped at
1600px wide and grouped by section:

| Folder                  | Photos |
| ----------------------- | ------ |
| `library/sports-halls`  | 47     |
| `library/timber-houses` | 53     |
| `library/hotels`        | 6      |
| `library/home`          | 3      |
| `library/references`    | 2      |

Nothing in `library/` is referenced by the site — it is a pool to choose from.

## Swapping a picture

Crop the replacement to the target size — 1600 x 900 for the hero, 1200 x 900
for everything else — and save it over the slot filename. The layout reserves
these aspect ratios, so a correctly sized file will not shift anything on the
page.

If the source is already in `library/`, it is 1600px wide and only needs
cropping to the right ratio.

## If you add new photographs

- Export as JPEG at around 80% quality.
- Keep each file under roughly 300 KB.
- Landscape orientation; the grids crop to the ratios above.
- Update the alt text in `src/i18n/de.ts` and `src/i18n/en.ts` under `media` if
  the subject changes.
