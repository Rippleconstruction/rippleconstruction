import { useState } from 'react';
import { Send, CheckCircle2, ImagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JOB_TYPES, TIMEFRAMES, quoteSchema, validatePhotoSelection } from '@/lib/quote-schema';

const fieldClass = 'mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-timber';
export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const fd = new FormData(e.currentTarget);
    const parsed = quoteSchema.safeParse(Object.fromEntries(fd));
    const files = fd.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);
    const photoError = validatePhotoSelection(files);
    const next: Record<string, string> = {};
    if (!parsed.success) for (const issue of parsed.error.issues) { const key = issue.path[0]; if (typeof key === 'string') next[key] = issue.message; }
    if (photoError) next.photos = photoError;
    setErrors(next);
    setSubmitError(null);
    if (!parsed.success || photoError) return;
    for (const [key, value] of Object.entries(parsed.data)) fd.set(key, value);
    if (!files.length) fd.delete('photos');
    setSending(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', body: fd });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        setSubmitError(result?.error ?? "We couldn't send your enquiry. Please try again or call 0436 802 414.");
        return;
      }
      setSent(true);
    } catch { setSubmitError("We couldn't send your enquiry. Please try again or call 0436 802 414."); }
    finally { setSending(false); }
  }
  if (sent) return <div role="status" className="min-h-[420px] grid place-items-center text-center"><div><CheckCircle2 className="mx-auto h-12 w-12 text-timber-deep" /><h2 className="mt-5 font-display text-2xl font-bold">Thanks! Michael will get back to you within 1 business day.</h2></div></div>;
  return <form onSubmit={submit} noValidate className="grid gap-5">
    <fieldset disabled={sending} className="grid gap-5 disabled:opacity-70">
      <div className="grid gap-5 sm:grid-cols-2">
        {([{ name: 'name', label: 'Name', type: 'text', max: 100 }, { name: 'phone', label: 'Phone', type: 'tel', max: 30 }, { name: 'email', label: 'Email', type: 'email', max: 255 }, { name: 'suburb', label: 'Suburb', type: 'text', max: 100 }]).map(f => <label key={f.name} className="text-sm font-medium">{f.label} *<input name={f.name} type={f.type} maxLength={f.max} required autoComplete={f.name === 'name' ? 'name' : f.name === 'phone' ? 'tel' : f.name === 'email' ? 'email' : 'address-level2'} className={fieldClass} aria-invalid={Boolean(errors[f.name])} />{errors[f.name] && <span className="mt-1 block text-sm text-destructive">{errors[f.name]}</span>}</label>)}
      </div>
      <label className="text-sm font-medium">Job type *<select name="jobType" defaultValue="" required className={fieldClass}><option value="" disabled>Select a job type…</option>{JOB_TYPES.map(t => <option key={t}>{t}</option>)}</select>{errors.jobType && <span className="mt-1 block text-destructive">{errors.jobType}</span>}</label>
      <label className="text-sm font-medium">Approximate size<input name="approximateSize" maxLength={150} placeholder="e.g. 5m x 4m or 30 metres" className={fieldClass} />{errors.approximateSize && <span className="mt-1 block text-destructive">{errors.approximateSize}</span>}</label>
      <label className="text-sm font-medium">Message *<textarea name="message" rows={5} maxLength={2000} required placeholder="Tell us about the job, site access and what you have in mind…" className={fieldClass} />{errors.message && <span className="mt-1 block text-destructive">{errors.message}</span>}</label>
      <label className="text-sm font-medium"><span className="flex items-center gap-2"><ImagePlus className="h-4 w-4" />Photo upload</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple className={`${fieldClass} text-sm`} onChange={e => { const files = Array.from(e.target.files ?? []); setPhotoNames(files.map(f => f.name)); const error = validatePhotoSelection(files); setErrors(old => ({ ...old, photos: error ?? '' })); }} /><span className="mt-2 block text-xs text-muted-foreground">Up to 5 images · JPG, PNG or WebP · 2 MB per image</span>{photoNames.length > 0 && <span className="mt-1 block break-words text-xs text-muted-foreground">{photoNames.join(' · ')}</span>}{errors.photos && <span role="alert" className="mt-1 block text-destructive">{errors.photos}</span>}</label>
      <label className="text-sm font-medium">When would you like it done? *<select name="timeframe" defaultValue="" required className={fieldClass}><option value="" disabled>Select a timeframe…</option>{TIMEFRAMES.map(t => <option key={t}>{t}</option>)}</select>{errors.timeframe && <span className="mt-1 block text-destructive">{errors.timeframe}</span>}</label>
    </fieldset>
    {submitError && <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">{submitError}</p>}
    <Button type="submit" disabled={sending} className="btn-timber h-auto py-4">{sending ? 'Sending…' : 'Get a free quote'}<Send /></Button>
    <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your enquiry. We don't share your details.</p>
  </form>;
}
