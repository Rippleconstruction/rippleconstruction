import { expect, test } from 'bun:test';
import { NEW_JOB_PHOTOS, SERVICE_GALLERIES } from './service-gallery';

test('all six uploaded job photos are assigned to a matching service gallery', () => {
  const assigned = Object.values(SERVICE_GALLERIES).flat().map(photo => photo.src);
  expect(Object.values(NEW_JOB_PHOTOS)).toHaveLength(6);
  for (const photo of Object.values(NEW_JOB_PHOTOS)) expect(assigned).toContain(photo.src);
});

test('service galleries never repeat a photo within the same page', () => {
  for (const photos of Object.values(SERVICE_GALLERIES)) {
    expect(new Set(photos.map(photo => photo.src)).size).toBe(photos.length);
  }
});

test('pergolas have no gallery without a verified pergola photo', () => {
  expect(SERVICE_GALLERIES.Pergola).toEqual([]);
});