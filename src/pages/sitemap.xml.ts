import type { APIRoute } from 'astro';
import { servicePages } from '../data/services';
import { SITE_URL } from '../data/seo';

const staticPaths = ['/', '/services/', '/service-areas/', '/schedule/'];

const buildUrlTag = (path: string) =>
  `<url><loc>${new URL(path, SITE_URL).toString()}</loc></url>`;

export const GET: APIRoute = () => {
  const allPaths = [
    ...staticPaths,
    ...servicePages.map((service) => `/services/${service.slug}/`),
  ];

  const uniquePaths = Array.from(new Set(allPaths));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${uniquePaths
    .map((path) => buildUrlTag(path))
    .join('')}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
