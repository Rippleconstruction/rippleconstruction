import { describe, expect, test } from 'bun:test';
import { quoteSchema, validatePhotoSelection, isValidImage } from './quote-schema';
const valid = { name: 'Test Customer', phone: '0436 802 414', email: 'customer@example.com', suburb: 'North Lakes', jobType: 'Deck', approximateSize: '5m x 4m', message: 'A new backyard deck with steps.', timeframe: 'Within 1 month' };
describe('Quote enquiry rules', () => {
  test('accepts five photos but rejects six', () => {
    const photo = { type: 'image/jpeg', size: 100 };
    expect(validatePhotoSelection(Array(5).fill(photo))).toBeNull();
    expect(validatePhotoSelection(Array(6).fill(photo))).not.toBeNull();
  });
  test('only accepts the requested job types', () => {
    for (const jobType of ['Deck', 'Pergola', 'Fence', 'Retaining wall', 'Excavation', 'Other']) expect(quoteSchema.safeParse({ ...valid, jobType }).success).toBe(true);
    expect(quoteSchema.safeParse({ ...valid, jobType: 'Unlisted' }).success).toBe(false);
  });
  test('only accepts the requested timeframes', () => {
    for (const timeframe of ['ASAP', 'Within 1 month', '1–3 months', 'Just getting prices']) expect(quoteSchema.safeParse({ ...valid, timeframe }).success).toBe(true);
    expect(quoteSchema.safeParse({ ...valid, timeframe: 'Unlisted' }).success).toBe(false);
  });
  test('requires a valid email and phone', () => {
    expect(quoteSchema.safeParse(valid).success).toBe(true);
    expect(quoteSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
    expect(quoteSchema.safeParse({ ...valid, phone: '' }).success).toBe(false);
  });
  test('rejects oversized and non-image uploads', () => {
    expect(validatePhotoSelection([{ type: 'image/jpeg', size: 2 * 1024 * 1024 }])).toBeNull();
    expect(validatePhotoSelection([{ type: 'image/jpeg', size: 2 * 1024 * 1024 + 1 }])).not.toBeNull();
    expect(validatePhotoSelection([{ type: 'text/html', size: 100 }])).not.toBeNull();
    expect(isValidImage(new Uint8Array([255,216,255]), 'image/jpeg')).toBe(true);
    expect(isValidImage(new Uint8Array([60,104,116,109,108]), 'image/jpeg')).toBe(false);
  });
});

test('accepts a Pergola enquiry', () => { expect(quoteSchema.parse({ ...valid, jobType: 'Pergola' }).jobType).toBe('Pergola'); });
