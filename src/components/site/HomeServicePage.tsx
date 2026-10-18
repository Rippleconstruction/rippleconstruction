import { JobPhoto } from './JobPhoto';
import { ArrowRight, CheckCircle2, ImagePlus, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Reveal } from './Reveal';
import { QuoteForm } from './QuoteForm';
import { HOME_SERVICES } from '@/lib/site-content';
import { SERVICE_PAGES } from '@/lib/service-pages';

export function HomeServicePage({ index }: { index: number }) {
  const service = HOME_SERVICES[index];
  const content = SERVICE_PAGES[index];
  if (!service || !content) return null;
  return <>
    <section className="relative flex min-h-[560px] items-end overflow-hidden">
      {service.img ? <JobPhoto src={service.img} alt={service.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 bg-ink" />}
      <div className="absolute inset-0 bg-ink/65" />
      <div className="relative container-x w-full pt-36 pb-16 text-bone"><Reveal>
        <span className="eyebrow-light">Owner-operated. Built properly.</span>
        <h1 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl font-bold leading-tight">{content.heading}</h1>
        <p className="mt-6 text-lg text-bone/85 max-w-2xl">{service.description}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="btn-timber h-auto"><a href="#quote">Get a free quote<ArrowRight /></a></Button><Button asChild variant="ghost" className="btn-ghost-light h-auto"><a href="tel:+61436802414"><Phone />0436 802 414</a></Button></div>
      </Reveal></div>
    </section>
    <section className="py-16 md:py-24"><div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div><span className="eyebrow">For your home</span><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">{service.title}, built around your property.</h2><div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">{content.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
      <div><h2 className="font-display text-3xl font-bold">What we build</h2><ul className="mt-6 grid gap-4">{content.builds.map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-timber-deep" /><span>{item}</span></li>)}</ul>
        <aside className="mt-10 rounded-lg border border-border bg-secondary/40 p-6" aria-label="Typical prices"><h2 className="font-display text-2xl font-bold">Typical prices</h2><dl className="mt-5 space-y-5">{content.prices.map(price => <div key={price.label}><dt className="text-sm font-medium">{price.label}</dt><dd className="mt-1 text-timber-deep font-semibold">{price.min !== null && price.max !== null ? <><span className="text-2xl font-display">${price.min}–${price.max}</span> {price.unit}</> : price.unit}</dd></div>)}</dl><p className="mt-6 text-sm text-muted-foreground">Every job is different. Send us photos for a free ballpark price.</p></aside>
      </div>
    </div></section>
    <section className="bg-secondary/40 py-16 md:py-24"><div className="container-x"><span className="eyebrow">{service.title}</span><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">Project gallery</h2><div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">{content.gallery.map(subject => <figure key={subject} className="overflow-hidden rounded-lg border border-border bg-card"><div className="aspect-[4/3] grid place-items-center bg-secondary text-muted-foreground"><div className="flex flex-col items-center gap-3"><ImagePlus className="h-8 w-8" aria-hidden="true" /><span className="text-xs uppercase">Photo pending</span></div></div><figcaption className="p-4 text-sm font-medium">{subject}</figcaption></figure>)}</div></div></section>
    <section className="py-16 md:py-24"><div className="container-x grid gap-10 md:grid-cols-[1fr_1.5fr]"><div><span className="eyebrow">Your questions</span><h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">Frequently asked questions</h2></div><Accordion type="single" collapsible>{content.faqs.map((faq,i) => <AccordionItem key={faq.question} value={`question-${i}`}><AccordionTrigger className="text-base py-5 gap-4">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground text-base leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section id="quote" className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"><div className="container-x grid gap-10 lg:grid-cols-2"><div><span className="eyebrow">Let’s talk about your job</span><h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">Get a free quote</h2><p className="mt-6 max-w-lg text-lg text-muted-foreground">Send Michael photos, rough measurements and what you have in mind. You’ll hear back within 1 business day.</p><a href="tel:+61436802414" className="mt-8 inline-flex items-center gap-3 font-semibold"><Phone className="h-5 w-5 text-timber-deep" />0436 802 414</a></div><div className="rounded-lg border border-border bg-card p-6 md:p-8"><QuoteForm key={content.jobType} defaultJobType={content.jobType} /></div></div></section>
  </>;
}
