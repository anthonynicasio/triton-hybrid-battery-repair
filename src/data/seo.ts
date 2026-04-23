export const SITE_URL = 'https://tritonhybridbattery.com';

export const DEFAULT_OG_IMAGE_PATH = '/images/logo.png';
export const DEFAULT_OG_IMAGE_ALT = 'Triton Hybrid Battery Repair logo';

const ORGANIZATION_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;

type JsonLd = Record<string, unknown>;

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const defaultStructuredData: JsonLd[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Triton Hybrid Battery Repair',
    url: SITE_URL,
    inLanguage: 'en-US',
    publisher: { '@id': ORGANIZATION_ID },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': ORGANIZATION_ID,
    name: 'Triton Hybrid Battery Repair',
    url: SITE_URL,
    image: absoluteUrl('/images/mechanic-lamp.png'),
    logo: absoluteUrl('/images/logo.png'),
    telephone: '+1-703-261-9442',
    email: 'tritonhybridbattery@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lorton',
      addressRegion: 'VA',
      addressCountry: 'US',
    },
    areaServed: [
      'Lorton, VA',
      'Alexandria, VA',
      'Springfield, VA',
      'Arlington, VA',
      'Washington, DC',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156',
    },
  },
];

export const buildWebPageSchema = ({
  path,
  title,
  description,
  pageType = 'WebPage',
}: {
  path: string;
  title: string;
  description: string;
  pageType?: 'WebPage' | 'CollectionPage';
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': pageType,
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORGANIZATION_ID },
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-US',
});

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const buildServiceSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name: `${name} | Triton Hybrid Battery Repair`,
  serviceType: name,
  description,
  provider: { '@id': ORGANIZATION_ID },
  areaServed: [
    'Lorton, VA',
    'Alexandria, VA',
    'Springfield, VA',
    'Arlington, VA',
    'Washington, DC',
  ],
  url: absoluteUrl(path),
});
