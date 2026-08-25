import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { withBase } from '../utils/url';

/**
 * Generated rather than kept as a static file in public/, because every path
 * inside it (start_url, icon sources) needs the base applied when the site is
 * served from a subdirectory. A static manifest would point at the domain root
 * and every icon would 404.
 */
export const GET: APIRoute = () => {
  const manifest = {
    name: site.legalName,
    short_name: 'SportPlus',
    description:
      'Montage von Prallschutzwänden und Sportböden in Sporthallen. Innenausbau für Hotellerie und Gewerbe.',
    lang: 'de',
    start_url: withBase('/de'),
    scope: withBase('/'),
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#1b4272',
    icons: [
      {
        src: withBase('/brand/icon-192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: withBase('/brand/icon-512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: withBase('/brand/icon-512-maskable.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
