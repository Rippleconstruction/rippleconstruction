import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, HardHat, Users, ClipboardCheck, CalendarClock, MapPin } from "lucide-react";
import cta from "@/assets/cta.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/why-choose")({
  head: () => ({
    meta: [
      { title: "Why Choose Ripple Construction — Qualified Carpentry Subcontractors QLD" },
      { name: "description", content: "Qualified, insured and safety-focused carpentry subcontractors delivering reliable workmanship and efficient scheduling across South East Queensland." },
      { property: "og:title", content: "Why Choose Ripple Construction" },
      { property: "og:url", content: "/why-choose" },
    ],
    links: [{ rel: "canonical", href: "/why-choose" }],
  }),
  component: WhyChoose,
});

const REASONS = [
  { icon: Award, title: "Qualified Carpenters", body: "Trade-qualified crews with current tickets and years of on-site experience." },
  { icon: ShieldCheck, title: "Fully Insured", body: "Comprehensive public liability and workers' compensation — paperwork in order, always." },
  { icon: HardHat, title: "Safety Focused", body: "Site-safe systems, PPE compliance and a culture where safety isn't optional." },
  { icon: Users, title: "Reliable Workforce", body: "Consistent crews you'll see week to week — not a rotating door of subcontractors." },
  { icon: ClipboardCheck, title: "Quality Control", body: "Internal QA on every stage, so what we hand over passes inspection first time." },
  { icon: CalendarClock, title: "Efficient Scheduling", body: "Program-first mindset. We plan around your builder's schedule, not the other way around." },
  { icon: MapPin, title: "SEQ Coverage", body: "Mobilised crews across Brisbane, Moreton Bay and the Sunshine Coast." },
];

function WhyChoose() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Why choose Ripple</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1] max-w-4xl">
              A subcontractor builders can actually rely on.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Seven reasons builders and developers keep Ripple Construction on their preferred
              subcontractor list.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="group rounded-2xl border border-border bg-card p-8 h-full hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-[var(--bone)] group-hover:bg-[var(--timber)] transition-colors">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{r.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={cta} alt="Carpenter framing detail" loading="lazy" width={1920} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--ink)]/80" />
        <div className="relative container-x py-24 md:py-32 text-[var(--bone)] text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
              Book a reliable carpentry crew for your next build.
            </h2>
            <div className="mt-8 flex justify-center flex-wrap gap-3">
              <Link to="/contact" className="btn-timber">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href="tel:+61436802414" className="btn-ghost-light">Call 0436802414</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
