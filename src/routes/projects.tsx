import { JobPhoto } from '@/components/site/JobPhoto';
import { pageHead } from '@/lib/seo';
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.webp";
import project2 from "@/assets/project2.webp";
import project3 from "@/assets/project3.webp";
import framing from "@/assets/framing.webp";
import cladding from "@/assets/cladding.webp";
import fitoff from "@/assets/fitoff.webp";

import fencing from "@/assets/fencing.webp";
import hero from "@/assets/hero.webp";
import archDoorAsset from "@/assets/arch_door.webp";
import featureBeamsAsset from "@/assets/feature_beams.webp";
import shedAsset from "@/assets/shed.webp";
import speedpanelAsset from "@/assets/speedpanel.webp";
import wardrobeAsset from "@/assets/wardrobe.webp";
import lawnAsset from "@/assets/lawn_1.webp";
import retainingFinishAsset from "@/assets/retaining_wall_finish.webp";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => pageHead('Carpentry Projects Brisbane & Moreton Bay | Ripple Construction', 'View real Ripple Construction job photos: composite decks, timber and Colorbond fences, concrete sleeper walls, framing and internal fit-outs.', '/projects'),
  component: Projects,
});

type Cat = "All" | "Framing" | "Cladding" | "Fit-Off" | "Decks" | "Fencing" | "Retaining Walls" | "Commercial" | "Landscaping";
const CATS: Cat[] = ["All", "Framing", "Cladding", "Fit-Off", "Decks", "Fencing", "Retaining Walls", "Commercial", "Landscaping"];

const ITEMS: { title: string; cat: Exclude<Cat, "All">; img: string; location: string; alt: string }[] = [
  { title: "Arched Timber Entry Doors", cat: "Fit-Off", img: archDoorAsset, location: "Not recorded", alt: "Custom arched timber double entry doors installed in a new home" },
  { title: "Exposed Feature Beams", cat: "Fit-Off", img: featureBeamsAsset, location: "Not recorded", alt: "Exposed timber feature beams and posts with steel brackets in an open-plan living area" },
  { title: "Steel Shed Frame", cat: "Commercial", img: shedAsset, location: "Not recorded", alt: "Structural steel shed frame erected on a new concrete slab" },
  { title: "Speedpanel Wall System", cat: "Commercial", img: speedpanelAsset, location: "Not recorded", alt: "Speedpanel wall panels stacked on an elevated commercial site above the city skyline" },
  { title: "Built-In Wardrobe", cat: "Fit-Off", img: wardrobeAsset, location: "Not recorded", alt: "Finished built-in wardrobe with white laminated shelving, hanging rails and recessed lighting" },
  { title: "Concrete Sleeper Retaining Wall", cat: "Retaining Walls", img: retainingFinishAsset, location: "Not recorded", alt: "Finished concrete sleeper retaining wall supporting a fenced property boundary" },
  { title: "Site Finish & Garden Edging", cat: "Landscaping", img: lawnAsset, location: "Not recorded", alt: "Completed lawn with curved mulched garden beds and timber edging around a raised home" },
  { title: "Custom Internal Fitout", cat: "Fit-Off", img: project3, location: "Not recorded", alt: "Internal fitout in progress with steel wall framing, linings and service openings" },
  { title: "Composite Deck & Stairs", cat: "Decks", img: project1, location: "Not recorded", alt: "Composite decking with timber stairs at a residential home" },
  { title: "Colourbond Boundary Fencing", cat: "Fencing", img: project2, location: "Not recorded", alt: "Colourbond boundary fencing installed along a residential property line" },
  { title: "Estate Framing Package", cat: "Framing", img: hero, location: "Not recorded", alt: "Timber wall and floor framing on a new residential slab" },
  { title: "Floor & Roof Framing", cat: "Framing", img: framing, location: "Not recorded", alt: "Timber floor and roof framing with steel beams on a new build" },
  { title: "Architectural Cladding", cat: "Cladding", img: cladding, location: "Not recorded", alt: "Horizontal external cladding on a raised home" },
  { title: "Hybrid Flooring Install", cat: "Fit-Off", img: fitoff, location: "Not recorded", alt: "Hybrid timber-look flooring installed through a finished interior" },
  { title: "Timber Fencing", cat: "Fencing", img: fencing, location: "Not recorded", alt: "New timber paling fence built along a residential boundary" },
  
];

function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active],
  );

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Projects</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1] max-w-4xl">
              A record of work we're proud of.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A selection of recent carpentry projects across South East Queensland.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <Button
                variant="outline"
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                  active === c
                    ? "bg-[var(--ink)] text-[var(--bone)] border-[var(--ink)]"
                    : "bg-transparent text-foreground/80 border-border hover:border-[var(--ink)]"
                }`}
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 3) * 80}>
                <article className="group overflow-hidden rounded-2xl bg-card border border-border">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <JobPhoto src={p.img} alt={p.alt} loading="lazy" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" width={1400} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 rounded-full bg-[var(--bone)]/95 text-[var(--ink)] px-3 py-1 text-xs font-semibold">
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.cat}</div>
                    <h2 className="mt-2 font-display text-xl font-bold">{p.title}</h2>
                    <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
                      <dt className="text-muted-foreground">Suburb</dt><dd>Not recorded</dd>
                      <dt className="text-muted-foreground">Size</dt><dd>Not recorded</dd>
                      <dt className="text-muted-foreground">Materials</dt><dd>{p.cat === 'Decks' ? 'Decking boards and fascia' : p.cat === 'Fencing' ? (p.title.includes('Colourbond') ? 'Colorbond panels' : 'Timber palings') : p.cat === 'Retaining Walls' ? 'Concrete sleepers and steel posts' : p.cat === 'Landscaping' ? 'Turf, mulch and timber edging' : 'As shown in photo'}</dd>
                      <dt className="text-muted-foreground">Build time</dt><dd>Not recorded</dd>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Ready to add your project to the list?
            </h2>
            <div className="mt-8">
              <Link to="/contact" className="btn-timber">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
