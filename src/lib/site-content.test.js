import { expect, test } from 'bun:test';
import { HOME_SERVICES, servicePrice } from './site-content';
test('decks start at $450 per m² installed', () => { expect(HOME_SERVICES[0].price).toBe(450); expect(servicePrice(HOME_SERVICES[0])).toBe('From $450 per m² installed'); });
test('fencing starts at $130 per metre installed', () => { expect(HOME_SERVICES[2].price).toBe(130); expect(servicePrice(HOME_SERVICES[2])).toBe('From $130 per metre installed'); });
test('retaining walls start at $350 per m² of wall', () => { expect(HOME_SERVICES[3].price).toBe(350); expect(servicePrice(HOME_SERVICES[3])).toBe('From $350 per m² of wall'); });
test('excavation is priced per job', () => { expect(HOME_SERVICES[4].price).toBeNull(); expect(servicePrice(HOME_SERVICES[4])).toBe('Priced per job'); });

test('pergola card publishes no starting price', () => { expect(HOME_SERVICES[1].price).toBeNull(); expect(servicePrice(HOME_SERVICES[1])).toBe('Priced per job'); });
