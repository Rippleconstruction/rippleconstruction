import { createFileRoute } from '@tanstack/react-router';
import { quoteSchema, validatePhotoSelection, isValidImage } from '@/lib/quote-schema';

export const Route = createFileRoute('/api/contact')({
  server: { handlers: {
    POST: async ({ request }) => {
      const origin = request.headers.get('origin');
      if (origin && origin !== new URL(request.url).origin) return Response.json({ error: 'Invalid request origin.' }, { status: 403 });
      const failure = (error: string, status = 400) => Response.json({ error }, { status, headers: { 'Cache-Control': 'no-store' } });
      if (Number(request.headers.get('content-length') ?? 0) > 11 * 1024 * 1024) return failure('Please upload smaller images.', 413);
      let fd: FormData;
      try { fd = await request.formData(); } catch { return failure('Invalid enquiry. Please try again.'); }
      if (fd.get('website')) return failure('Invalid enquiry.');
      const parsed = quoteSchema.safeParse(Object.fromEntries(fd));
      if (!parsed.success) return failure('Please check the form fields and try again.');
      const photos = fd.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);
      const photoError = validatePhotoSelection(photos);
      if (photoError) return failure(photoError);
      const bytes = await Promise.all(photos.map(async p => new Uint8Array(await p.arrayBuffer())));
      if (photos.some((p, i) => !isValidImage(bytes[i] ?? new Uint8Array(), p.type))) return failure('One of the files is not a valid image. Please upload JPG, PNG or WebP photos.');
      const apiKey = process.env['RESEND_API_KEY'];
      if (!apiKey) return failure('The enquiry service is temporarily unavailable. Please call 0436 802 414.', 503);
      const id = crypto.randomUUID();
      const data = parsed.data;
      const paths: string[] = [];
      try {
        const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
        for (const [i, photo] of photos.entries()) {
          const ext = photo.type === 'image/jpeg' ? 'jpg' : photo.type === 'image/png' ? 'png' : 'webp';
          const path = `${id}/${i + 1}.${ext}`;
          const upload = await supabaseAdmin.storage.from('quote-photos').upload(path, bytes[i] ?? new Uint8Array(), { contentType: photo.type, upsert: false });
          if (upload.error) throw new Error('Photo storage failed');
          paths.push(path);
        }
        const stored = await supabaseAdmin.from('quote_submissions').insert({ id, name: data.name, phone: data.phone, email: data.email, suburb: data.suburb, job_type: data.jobType, approximate_size: data.approximateSize, message: data.message, timeframe: data.timeframe, photo_paths: paths });
        if (stored.error) { if (paths.length) await supabaseAdmin.storage.from('quote-photos').remove(paths); throw new Error('Enquiry storage failed'); }
        const text = [
          'New Website Enquiry - Ripple Construction',
          `Name: ${data.name}`, `Phone: ${data.phone}`, `Email: ${data.email}`, `Suburb: ${data.suburb}`,
          `Job type: ${data.jobType}`, `Approximate size: ${data.approximateSize || 'Not supplied'}`,
          `When would you like it done?: ${data.timeframe}`, `Project details:\n${data.message}`,
          `Photos: ${photos.length} attached`, `Enquiry reference: ${id}`,
        ].join('\n\n');
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`, 'Idempotency-Key': `quote-${id}` },
          body: JSON.stringify({ from: 'Ripple Construction Website <website@rippleconstruction.com.au>', to: ['Michael@rippleconstruction.com.au'], reply_to: data.email, subject: 'New Website Enquiry - Ripple Construction', text,
            attachments: bytes.map((b, i) => ({ filename: `job-photo-${i + 1}.${photos[i]?.type === 'image/jpeg' ? 'jpg' : photos[i]?.type === 'image/png' ? 'png' : 'webp'}`, content: Buffer.from(b).toString('base64') })),
          }),
        });
        const result: unknown = await response.json().catch(() => null);
        const emailId = result && typeof result === 'object' && 'id' in result && typeof result.id === 'string' ? result.id : null;
        if (!response.ok || !emailId) {
          await supabaseAdmin.from('quote_submissions').update({ email_status: 'failed' }).eq('id', id);
          console.error('Quote email was not accepted', response.status);
          return failure("We couldn't email your enquiry just now. Please try again or call 0436 802 414.", 502);
        }
        const updated = await supabaseAdmin.from('quote_submissions').update({ email_status: 'sent', email_id: emailId }).eq('id', id);
        if (updated.error) console.error('Quote email status could not be updated');
        return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
      } catch {
        console.error('Quote submission could not be completed');
        return failure("We couldn't send your enquiry. Please try again or call 0436 802 414.", 502);
      }
    },
  } },
});
