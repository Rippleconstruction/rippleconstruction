import { JobPhoto } from '@/components/site/JobPhoto';
import { pageHead } from '@/lib/seo';
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import framing from "@/assets/framing.webp";
import roof from "@/assets/roof-framing.webp";
import cladding from "@/assets/cladding.webp";
import fitoff from "@/assets/fitoff.webp";
import deck from "@/assets/deck.webp";
import fencing from "@/assets/fencing.webp";
import retainingWall from "@/assets/retaining-wall.webp";
import hero from "@/assets/hero.webp";
import shedAsset from "@/assets/shed.webp";
import archDoorAsset from "@/assets/arch_door.webp";

const shed = shedAsset;
const archDoor = archDoorAsset;
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => pageHead('Carpentry Services Brisbane & Moreton Bay | Ripple Construction', 'Explore timber framing, cladding, fit-off, decks, fencing and retaining walls for homeowners and builders across Brisbane and Moreton Bay.', '/services'),
  component: Services,
});

const SERVICES = [
  { title: "Timber Framing", body: "Precision timber framing for residential and commercial builds — cut to plan, stood true, ready for inspection.", img: framing, alt: "Timber floor and roof framing with steel beams"},
  { title: "Wall & Roof Framing", body: "Full wall and roof framing packages, from single dwellings to multi-lot developments.", img: roof, alt: "Timber and steel wall framing with wall linings and service openings"},
  { title: "Structural Carpentry", body: "Structural steel and shed framing, load-bearing carpentry and structural set-out executed to engineering specifications and Australian standards.", img: shed, alt: "Steel shed frame on a concrete slab"},
  { title: "External Cladding", body: "Weatherboard, composite, timber-look and architectural cladding — installed clean and straight.", img: cladding, alt: "Horizontal external cladding on a raised home"},
  { title: "Internal Fixing & Fit-Off", body: "Doors, skirtings, architraves, linings and joinery installation with a sharp finish.", img: fitoff, alt: "Hybrid timber-look flooring in a finished interior"},
  { title: "Decks & Outdoor Structures", body: "Hardwood decks, pergolas, screens and outdoor timber structures built to last.", img: deck, alt: "Composite deck with horizontal fascia boards"},
  { title: "Fencing", body: "Timber fencing, slat screens, boundary fences and privacy walls — built straight and built to last.", img: fencing, alt: "Timber paling boundary fence"},
  { title: "Retaining Walls", body: "Engineered timber sleeper and concrete retaining walls that hold the line and look sharp.", img: retainingWall, alt: "Concrete sleeper retaining wall with steel posts"},
  { title: "Renovations", body: "Carpentry-led renovations and extensions — custom entry doors, character upgrades and detailed carpentry from Queenslander work to modern rebuilds.", img: archDoor, alt: "Arched timber double entry doors"},
  { title: "General Carpentry", body: "Site carpentry, temporary works, remedial repairs and everything in between.", img: hero, alt: "Timber wall framing on a concrete slab"},
];

function Services() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Services</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1] max-w-4xl">
              Full-scope carpentry for builders, developers & homeowners.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              From framing packages to detailed fit-off, fencing and retaining walls, Ripple
              Construction covers every carpentry stage of your build with one accountable
              subcontractor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-16 md:gap-20">
            {SERVICES.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={s.title}>
                  <article className={`grid gap-8 md:grid-cols-2 md:items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <JobPhoto src={s.img} alt={s.alt} loading="lazy" sizes="(min-width: 1024px) 50vw, 100vw" width={1400} height={1000} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--timber-deep)] font-semibold">
                        0{i + 1} / Service
                      </div>
                      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">{s.title}</h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
                      <div className="mt-6">
                        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--timber-deep)]">
                          Enquire about {s.title} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--ink)] text-[var(--bone)]">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Have a scope you need priced? Send it through.
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
