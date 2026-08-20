# Images

Drop project photography in this folder. Files here are served from the site
root, so `public/images/hero.jpg` is reachable at `/images/hero.jpg`.

The layout currently renders dashed placeholders at the exact aspect ratio each
image needs, so adding the real files will not shift anything on the page.

## Expected files

| File                     | Size (px)  | Used on          |
| ------------------------ | ---------- | ---------------- |
| `hero.jpg`               | 1600 x 900 | Home, hero       |
| `sports-halls.jpg`       | 1200 x 900 | Home, sectors    |
| `hotels.jpg`             | 1200 x 900 | Home, sectors    |
| `timber-houses.jpg`      | 1200 x 900 | Home, sectors    |
| `sports-halls-1..3.jpg`  | 1200 x 900 | References page  |
| `hotels-1..3.jpg`        | 1200 x 900 | References page  |
| `timber-houses-1..3.jpg` | 1200 x 900 | References page  |
| `team.jpg`               | 1200 x 900 | About page       |

## Guidance

- Export as JPEG at around 80% quality, or WebP for smaller files.
- Keep each file under roughly 300 KB so pages stay fast.
- Landscape orientation throughout; the grid crops to the ratios above.
