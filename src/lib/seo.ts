import { AREAS, GOOGLE_PROFILE, HOME_SERVICES } from './site-content';
export const SITE_URL = 'https://www.rippleconstruction.com.au';
export const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Ripple Construction',
  telephone: '+61436802414',
  email: 'Michael@rippleconstruction.com.au',
  url: SITE_URL,
  areaServed: ['Brisbane', 'Moreton Bay', ...AREAS].map(name => ({ '@type': 'Place', name })),
  sameAs: ['https://www.instagram.com/ripple.construction', GOOGLE_PROFILE],
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Homeowner services',
    itemListElement: HOME_SERVICES.map(service => ({ '@type': 'Offer', itemOffered: {
      '@type': 'Service', name: service.title, serviceType: service.title,
      description: service.description, url: `${SITE_URL}${service.to}`,
    } })),
  },
};
type FAQ = { question: string; answer: string };
export function faqSchema(faqs: readonly FAQ[], path: string) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };
}
export function pageHead(title: string, description: string, path: string, options: { faqs?: readonly FAQ[]; hero?: string } = {}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title }, { name: 'description', content: description },
      { property: 'og:title', content: title }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }, { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: url }, ...(options.hero ? [{ rel: 'preload', as: 'image', href: options.hero, fetchPriority: 'high' as const }] : [])],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(BUSINESS_SCHEMA).replace(/</g, '\\u003c') },
      ...(options.faqs ? [{ type: 'application/ld+json', children: JSON.stringify(faqSchema(options.faqs, path)).replace(/</g, '\\u003c') }] : [])],
  };
}
