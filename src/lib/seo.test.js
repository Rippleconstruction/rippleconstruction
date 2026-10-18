import { expect, test } from 'bun:test';
import { BUSINESS_SCHEMA, pageHead, faqSchema } from './seo';
import { AREAS } from './site-content';
import { SERVICE_PAGES } from './service-pages';
test('business contact and canonical domain are the requested values', () => {
  expect(BUSINESS_SCHEMA.name).toBe('Ripple Construction');
  expect(BUSINESS_SCHEMA.telephone).toBe('+61436802414');
  expect(BUSINESS_SCHEMA.email).toBe('Michael@rippleconstruction.com.au');
  expect(BUSINESS_SCHEMA.url).toBe('https://www.rippleconstruction.com.au');
});
test('business serves Brisbane, Moreton Bay and all named Areas suburbs', () => { expect(BUSINESS_SCHEMA.areaServed.map(area=>area.name)).toEqual(['Brisbane','Moreton Bay',...AREAS]); });
test('business social profiles are the confirmed links', () => { expect(BUSINESS_SCHEMA.sameAs).toEqual(['https://www.instagram.com/ripple.construction','https://share.google/rlIHZsd0qFLOK32fO']); });
test('canonical URL stays on the specific page', () => { expect(pageHead('Title','Description','/fencing').links[0].href).toBe('https://www.rippleconstruction.com.au/fencing'); });
test('FAQ schema uses the actual five answers for each service', () => {
 for (const service of SERVICE_PAGES) {
  const schema=faqSchema(service.faqs,'/decks');
  expect(schema.mainEntity.length).toBe(5);
  expect(schema.mainEntity.map(q=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(service.faqs);
 }
});

test('business service catalogue includes Pergolas', () => { expect(BUSINESS_SCHEMA.hasOfferCatalog.itemListElement.map(offer=>offer.itemOffered.name)).toEqual(['Decks','Pergolas','Fencing','Retaining Walls','Excavation & Site Prep']); });
