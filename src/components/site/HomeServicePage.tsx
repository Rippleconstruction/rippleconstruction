import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from './Reveal';
import { HOME_SERVICES, servicePrice } from '@/lib/site-content';

export function HomeServicePage({ index }: { index: number }) {
  const service = HOME_SERVICES[index];
  if (!service) return null;
  return <><section className="pt-32 md:pt-40 pb-12 bg-secondary/40"><div className="container-x"><Reveal><span className="eyebrow">Brisbane & Moreton Bay</span><h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-tight">{service.title}</h1><p className="mt-6 text-lg text-muted-foreground max-w-2xl">{service.description}</p></Reveal></div></section>
    <section className="py-16 md:py-24"><div className="container-x grid md:grid-cols-2 gap-12 items-center"><Reveal><div className="aspect-[4/3] overflow-hidden rounded-lg"><img src={service.img} alt={service.alt} className="h-full w-full object-cover" /></div></Reveal><Reveal delay={100}><p className="eyebrow">Owner-operated. Built properly.</p><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">{servicePrice(service)}</h2><p className="mt-6 text-muted-foreground leading-relaxed">{service.body}</p><ul className="mt-6 grid gap-3">{service.details.map(d => <li key={d} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-timber-deep" />{d}</li>)}</ul><p className="mt-6 text-sm text-muted-foreground">Final pricing depends on size, materials, access and site conditions. We measure up and provide a fixed, itemised quote.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="btn-timber h-auto"><Link to="/contact">Get a free quote<ArrowRight /></Link></Button><Button asChild variant="outline" className="h-auto py-4"><a href="tel:+61436802414"><Phone />0436 802 414</a></Button></div></Reveal></div></section></>;
}
