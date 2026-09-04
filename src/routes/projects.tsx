import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import framing from "@/assets/framing.jpg";
import cladding from "@/assets/cladding.jpg";
import fitoff from "@/assets/fitoff.jpg";
import deck from "@/assets/deck.jpg";
import fencing from "@/assets/fencing.jpg";
import hero from "@/assets/hero.jpg";
import archDoorAsset from "@/assets/arch_door.jpg.asset.json";
import featureBeamsAsset from "@/assets/feature_beams.jpg.asset.json";
import shedAsset from "@/assets/shed.jpg.asset.json";
import speedpanelAsset from "@/assets/speedpanel.jpg.asset.json";
import wardrobeAsset from "@/assets/wardrobe.webp.asset.json";
import lawnAsset from "@/assets/lawn_1.jpg.asset.json";
import retainingFinishAsset from "@/assets/retaining_wall_finish.jpg.asset.json";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Carpentry Portfolio | Ripple Construction QLD" },
      { name: "description", content: "Selected carpentry projects by Ripple Construction across Brisbane, Moreton Bay and the Sunshine Coast — framing, cladding, fit-off and renovations." },
      { property: "og:title", content: "Projects — Ripple Construction" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Cat = "All" | "Framing" | "Cladding" | "Fit-Off" | "Decks" | "Fencing" | "Retaining Walls" | "Commercial" | "Landscaping";
const CATS: Cat[] = ["All", "Framing", "Cladding", "Fit-Off", "Decks", "Fencing", "Retaining Walls", "Commercial", "Landscaping"];

const ITEMS: { title: string; cat: Exclude<Cat, "All">; img: string; location: string; alt: string }[] = [
  { title: "Arched Timber Entry Doors", cat: "Fit-Off", img: archDoorAsset.url, location: "Brisbane", alt: "Custom arched timber double entry doors installed in a new home" },
  { title: "Exposed Feature Beams", cat: "Fit-Off", img: featureBeamsAsset.url, location: "Sunshine Coast", alt: "Exposed timber feature beams and posts with steel brackets in an open-plan living area" },
  { title: "Steel Shed Frame", cat: "Commercial", img: shedAsset.url, location: "Moreton Bay", alt: "Structural steel shed frame erected on a new concrete slab" },
  { title: "Speedpanel Wall System", cat: "Commercial", img: speedpanelAsset.url, location: "Brisbane CBD", alt: "Speedpanel wall panels stacked on an elevated commercial site above the city skyline" },
  { title: "Built-In Wardrobe", cat: "Fit-Off", img: wardrobeAsset.url, location: "Brisbane", alt: "Finished built-in wardrobe with white shelving, hanging rails and recessed lighting" },
  { title: "Concrete Sleeper Retaining Wall", cat: "Retaining Walls", img: retainingFinishAsset.url, location: "Sunshine Coast", alt: "Finished concrete sleeper retaining wall supporting a fenced property boundary" },
  { title: "Site Finish & Garden Edging", cat: "Landscaping", img: lawnAsset.url, location: "Moreton Bay", alt: "Completed lawn with curved mulched garden beds and timber edging around a raised home" },
  { title: "Driveway Retaining Wall", cat: "Retaining Walls", img: project3, location: "Brisbane", alt: "Concrete sleeper retaining wall along a rural driveway" },
  { title: "Composite Deck & Stairs", cat: "Decks", img: project1, location: "Buderim", alt: "Composite decking with timber stairs at a residential home" },
  { title: "Colourbond Boundary Fencing", cat: "Fencing", img: project2, location: "Caboolture", alt: "Colourbond boundary fencing installed along a residential property line" },
  { title: "Estate Framing Package", cat: "Framing", img: hero, location: "North Lakes", alt: "Timber wall and floor framing on a new residential slab" },
  { title: "Floor & Roof Framing", cat: "Framing", img: framing, location: "Brisbane", alt: "Timber floor and roof framing with steel beams on a new build" },
  { title: "Architectural Cladding", cat: "Cladding", img: cladding, location: "Newstead", alt: "Architectural cladding installed on a modern facade" },
  { title: "Hybrid Flooring Install", cat: "Fit-Off", img: fitoff, location: "Brisbane", alt: "Hybrid timber-look flooring installed through a finished interior" },
  { title: "Timber Fencing", cat: "Fencing", img: fencing, location: "Moreton Bay", alt: "New timber paling fence built along a residential boundary" },
  { title: "Pool Deck & Screening", cat: "Decks", img: deck, location: "Sunshine Coast", alt: "Composite pool deck with timber screening" },
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
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                  active === c
                    ? "bg-[var(--ink)] text-[var(--bone)] border-[var(--ink)]"
                    : "bg-transparent text-foreground/80 border-border hover:border-[var(--ink)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 3) * 80}>
                <article className="group overflow-hidden rounded-2xl bg-card border border-border">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 rounded-full bg-[var(--bone)]/95 text-[var(--ink)] px-3 py-1 text-xs font-semibold">
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.location}</div>
                    <div className="mt-2 font-display text-xl font-bold">{p.title}</div>
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
