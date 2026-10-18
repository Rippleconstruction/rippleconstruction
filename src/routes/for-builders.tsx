import { JobPhoto } from '@/components/site/JobPhoto';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import framing from '@/assets/framing.webp';
import cladding from '@/assets/cladding.webp';
import fitoff from '@/assets/fitoff.webp';
import shed from '@/assets/shed.webp';
import speedpanel from '@/assets/speedpanel.webp';
import { Reveal } from '@/components/site/Reveal';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/seo';

export const Route = createFileRoute('/for-builders')({
  head: () => pageHead('Carpentry Subcontractors Brisbane & Moreton Bay | Ripple Construction', 'Timber framing, external cladding, internal fit-off and structural carpentry subcontracting for builders across Brisbane and Moreton Bay. Send us your scope.', '/for-builders'),
  component: ForBuilders,
});
const SERVICES = [
  { title: 'Timber Framing', body: 'Wall, floor and roof framing packages set out and stood true to plan.', img: framing, alt: 'Timber framing and steel beams on a residential build' },
  { title: 'External Cladding', body: 'Weatherboard, composite and architectural cladding installed clean and straight.', img: cladding, alt: 'External cladding on a raised residential home' },
  { title: 'Internal Fit-Off', body: 'Doors, skirtings, architraves, flooring and joinery installation with a sharp finish.', img: fitoff, alt: 'Timber-look flooring installed in a finished interior' },
  { title: 'Structural Carpentry', body: 'Structural set-out, load-bearing work and shed framing to engineering specifications.', img: shed, alt: 'Steel shed frame erected on a concrete slab' },
];
function ForBuilders() {
  return <><section className="pt-32 md:pt-40 pb-16 bg-secondary/40"><div className="container-x"><Reveal><span className="eyebrow">For Builders</span><h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl">Carpentry subcontractors builders actually rebook.</h1><p className="mt-6 text-lg text-muted-foreground max-w-2xl">Reliable commercial and residential carpentry subcontracting across Brisbane, Moreton Bay and the Sunshine Coast. Clean workmanship, tight schedules and clear communication.</p><Button asChild className="btn-timber mt-8 h-auto"><Link to="/contact">Send us your scope<ArrowRight /></Link></Button></Reveal></div></section>
  <section className="py-16 md:py-24"><div className="container-x grid gap-16">{SERVICES.map((s, i) => <Reveal key={s.title}><article className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}><div className="aspect-[4/3] overflow-hidden rounded-lg"><JobPhoto src={s.img} alt={s.alt} className="h-full w-full object-cover" loading="lazy" sizes="(min-width: 1024px) 50vw, 100vw" /></div><div><span className="eyebrow">0{i + 1} / Builder service</span><h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">{s.title}</h2><p className="mt-4 text-muted-foreground">{s.body}</p></div></article></Reveal>)}</div></section>
  <section className="py-16 bg-secondary/40"><div className="container-x"><h2 className="font-display text-3xl md:text-4xl font-bold">One accountable subcontractor.</h2><ul className="mt-8 grid gap-6 md:grid-cols-3">{['Qualified, safety-focused carpenters', 'Reliable scheduling and clear communication', 'Insured, with quality workmanship at every stage'].map(t => <li key={t} className="flex gap-3"><CheckCircle2 className="shrink-0 text-timber-deep" />{t}</li>)}</ul></div></section>
  <section className="relative overflow-hidden"><JobPhoto src={speedpanel} alt="Speedpanel panels on a commercial construction site" className="absolute inset-0 h-full w-full object-cover" loading="lazy" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute inset-0 bg-ink/80" /><div className="relative container-x py-24 text-bone"><h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">Have a scope you need priced? Send it through.</h2><p className="mt-5 text-bone/80">Plans, timelines and scope — a straight answer and a crew ready to deliver.</p><Button asChild className="btn-timber mt-8 h-auto"><Link to="/contact">Request a Quote<ArrowRight /></Link></Button></div></section></>;
}
