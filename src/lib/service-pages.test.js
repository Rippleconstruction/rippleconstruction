import { expect, test } from 'bun:test';
import { SERVICE_PAGES } from './service-pages';
test('deck guide is $450–$650 per m²', () => { expect(SERVICE_PAGES[0].prices[0]).toEqual({ label: 'Decks', min: 450, max: 650, unit: 'per m²' }); });
test('Colorbond guide is $130–$170 per metre', () => { expect(SERVICE_PAGES[2].prices[0]).toEqual({ label: 'Colorbond fencing', min: 130, max: 170, unit: 'per metre' }); });
test('timber fence guide is $140–$190 per metre', () => { expect(SERVICE_PAGES[2].prices[1]).toEqual({ label: 'Timber fencing', min: 140, max: 190, unit: 'per metre' }); });
test('retaining wall guide is $350–$600 per m² of wall', () => { expect(SERVICE_PAGES[3].prices[0]).toEqual({ label: 'Retaining walls', min: 350, max: 600, unit: 'per m² of wall' }); });
test('unconfirmed excavation rate is not invented', () => { expect(SERVICE_PAGES[4].prices[0].min).toBeNull(); expect(SERVICE_PAGES[4].prices[0].max).toBeNull(); });
test('each service supplies its enquiry job type', () => { expect(SERVICE_PAGES.map(s=>s.jobType)).toEqual(['Deck','Pergola','Fence','Retaining wall','Excavation']); });

test('pergola page publishes no price guide', () => { expect(SERVICE_PAGES[1].prices).toEqual([]); });
