import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Hammer, Clock, CheckCircle2, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import framing from "@/assets/framing.jpg";
import cladding from "@/assets/cladding.jpg";
import fitoff from "@/assets/fitoff.jpg";
import deck from "@/assets/deck.jpg";
import fencing from "@/assets/fencing.jpg";
import retainingWall from "@/assets/retaining-wall.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import cta from "@/assets/cta.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ripple Construction — Carpentry Subcontractors Brisbane & QLD" },
      {
        name: "description",
        content:
          "Reliable carpentry subcontractors for builders, developers and homeowners. Timber framing, cladding, fit-off, fencing, retaining walls and structural carpentry across Brisbane, Moreton Bay and Sunshine Coast.",
      },
      { property: "og:title", content: "Ripple Construction — Carpentry Subcontractors QLD" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const VALUES = [
  { icon: ShieldCheck, title: "Reliable & Professional", body: "Trusted by builders, developers and homeowners to show up, communicate and deliver — every project, every time." },
  { icon: Hammer, title: "Quality Workmanship", body: "Qualified carpenters producing precise, code-compliant work you can put your name to." },
  { icon: Clock, title: "On-Time Delivery", body: "Efficient scheduling and disciplined crews keep your program moving without surprises." },
];

const SERVICES = [
  { title: "Timber Framing", body: "Precision wall, floor and roof framing built to plan.", img: framing, to: "/services" as const },
  { title: "External Cladding", body: "Weatherboard, composite and architectural cladding.", img: cladding, to: "/services" as const },
  { title: "Internal Fit-Off", body: "Doors, skirtings, architraves and joinery installation.", img: fitoff, to: "/services" as const },
  { title: "Decks & Structures", body: "Hardwood decks, pergolas and outdoor timber structures.", img: deck, to: "/services" as const },
  { title: "Fencing", body: "Timber, slat and boundary fencing built straight and built to last.", img: fencing, to: "/services" as const },
  { title: "Retaining Walls", body: "Engineered sleeper and concrete retaining walls that hold the line.", img: retainingWall, to: "/services" as const },
];

const PROJECTS = [
  { title: "Coastal Contemporary", tag: "Framing & Cladding", img: project1 },
  { title: "Commercial Framework", tag: "Structural Carpentry", img: project2 },
  { title: "Heritage Renovation", tag: "Renovation & Deck", img: project3 },
];

const TESTIMONIALS = [
  { q: "Ripple's crew is easily one of the most reliable frames we've worked with. Clean sites, sharp workmanship and always on program.", by: "Daniel M.", role: "Site Manager, Brisbane Builder" },
  { q: "Communication is what sets them apart. We hand over the plans, they come back with a plan — and they deliver.", by: "Sarah K.", role: "Project Manager, Developer" },
  { q: "Quality of finish on the cladding and fit-off was excellent. We've booked them for the next three houses.", by: "Tom R.", role: "Director, Custom Home Builder" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Timber-framed home under construction at dusk"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.55),transparent_60%)]" />

        <div className="relative container-x pt-32 pb-16 md:pb-24 text-[var(--bone)]">
          <Reveal>
            <span className="eyebrow-light">
              <span className="h-px w-8 bg-[var(--timber)]" />
              South East Queensland
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display font-bold text-[clamp(2.4rem,6vw,5.25rem)] leading-[0.98] max-w-5xl">
              Reliable Carpentry <span className="text-[var(--timber)]">Subcontractors</span> You Can Count On.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              Delivering high-quality framing, cladding, fit-off, fencing, retaining walls and
              structural carpentry across South East Queensland — for builders, developers and
              homeowners.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-timber">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-ghost-light">Our Services</Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-14 grid grid-cols-3 max-w-2xl gap-6 border-t border-white/15 pt-8">
              {[
                ["10+", "Years On Site"],
                ["150+", "Projects Delivered"],
                ["100%", "Insured & Qualified"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-[var(--timber)]">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-[var(--bone)] group-hover:bg-[var(--timber)] transition-colors">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={framing} alt="Carpenters installing timber framing on site" loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[var(--ink)]/85 backdrop-blur p-4 text-[var(--bone)] flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[var(--timber)] grid place-items-center font-display font-bold">R</div>
                <div>
                  <div className="text-sm font-semibold">Ripple Construction Pty Ltd</div>
                  <div className="text-xs text-white/70">Qualified · Insured · QLD-based</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />About Ripple</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              Carpentry subcontractors builders actually rebook.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Ripple Construction is a dedicated carpentry subcontractor working with builders,
              developers, construction companies and homeowners across South East Queensland. From
              large-scale framing packages to fencing, retaining walls and detailed fit-off work,
              we bring the same standards to every site: clean workmanship, tight schedules and
              clear communication.
            </p>
            <ul className="mt-6 space-y-3">
              {["Qualified, safety-focused carpenters", "Framing, cladding, fit-off, fencing & retaining walls", "Servicing Brisbane, Moreton Bay & Sunshine Coast"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-[var(--timber)] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about" className="btn-primary">More about us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />What we do</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">Featured carpentry services</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold inline-flex items-center gap-1 hover:text-[var(--timber-deep)]">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link to={s.to} className="group block overflow-hidden rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-[var(--bone)]">
                      <div className="font-display text-lg font-bold">{s.title}</div>
                      <div className="mt-1 text-xs text-white/80">{s.body}</div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Recent work</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">Selected projects</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold inline-flex items-center gap-1 hover:text-[var(--timber-deep)]">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl bg-card border border-border">
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest text-[var(--timber-deep)] font-semibold">{p.tag}</div>
                    <div className="mt-2 font-display text-xl font-bold">{p.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />What builders say</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">Trusted on site.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.by} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <Quote className="h-6 w-6 text-[var(--timber)]" />
                  <blockquote className="mt-4 text-foreground leading-relaxed">"{t.q}"</blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold">{t.by}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={cta} alt="Carpenter working with a nail gun on timber framing" loading="lazy" width={1920} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--ink)]/80" />
        <div className="relative container-x py-24 md:py-32 text-[var(--bone)]">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow-light"><span className="h-px w-8 bg-[var(--timber)]" />Working on your next build?</span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
                Let's talk about your upcoming project.
              </h2>
              <p className="mt-6 text-white/80 max-w-xl">
                Send us the plans, timelines and scope. We'll come back with a straight answer,
                a fair price and a crew ready to deliver.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-timber">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
                <a href="tel:+61400000000" className="btn-ghost-light">Call 0400 000 000</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
