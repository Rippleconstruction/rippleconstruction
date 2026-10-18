import { z } from 'zod';

export const JOB_TYPES = ['Deck', 'Fence', 'Retaining wall', 'Excavation', 'Other'] as const;
export const TIMEFRAMES = ['ASAP', 'Within 1 month', '1–3 months', 'Just getting prices'] as const;
export const MAX_PHOTOS = 5;
export const MAX_PHOTO_BYTES = 2 * 1024 * 1024;
export const PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  phone: z.string().trim().min(6, 'Enter your phone number').max(30).regex(/^[+()\d\s.-]+$/, 'Enter a valid phone number'),
  email: z.string().trim().email('Enter a valid email').max(255),
  suburb: z.string().trim().min(2, 'Enter your suburb').max(100),
  jobType: z.enum(JOB_TYPES, { errorMap: () => ({ message: 'Choose a job type' }) }),
  approximateSize: z.string().trim().max(150),
  message: z.string().trim().min(10, 'Tell us a bit more about the project').max(2000),
  timeframe: z.enum(TIMEFRAMES, { errorMap: () => ({ message: 'Choose a timeframe' }) }),
});
export function validatePhotoSelection(files: { size: number; type: string }[]): string | null {
  if (files.length > MAX_PHOTOS) return 'Please select up to 5 images.';
  if (files.some(f => !PHOTO_TYPES.includes(f.type))) return 'Please use JPG, PNG or WebP images.';
  if (files.some(f => f.size === 0 || f.size > MAX_PHOTO_BYTES)) return 'Each image must be no larger than 2 MB.';
  return null;
}
export function isValidImage(bytes: Uint8Array, type: string): boolean {
  if (type === 'image/jpeg') return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  if (type === 'image/png') return [137, 80, 78, 71, 13, 10, 26, 10].every((b, i) => bytes[i] === b);
  if (type === 'image/webp') return String.fromCharCode(...bytes.slice(0, 4)) === 'RIFF' && String.fromCharCode(...bytes.slice(8, 12)) === 'WEBP';
  return false;
}
