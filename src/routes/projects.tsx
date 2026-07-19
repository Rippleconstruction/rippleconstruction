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
import roof from "@/assets/roof-framing.jpg";
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

type Cat = "All" | "Framing" | "Cladding" | "Fit-Off" | "Decks" | "Commercial" | "Renovation";
const CATS: Cat[] = ["All", "Framing", "Cladding", "Fit-Off", "Decks", "Commercial", "Renovation"];

const ITEMS: { title: string; cat: Exclude<Cat, "All">; img: string; location: string }[] = [
  { title: "Coastal Contemporary", cat: "Cladding", img: project1, location: "Sunshine Coast" },
  { title: "Warehouse Framework", cat: "Commercial", img: project2, location: "Brisbane" },
  { title: "Queenslander Renewal", cat: "Renovation", img: project3, location: "Moreton Bay" },
  { title: "Estate Framing Package", cat: "Framing", img: framing, location: "North Lakes" },
  { title: "Architectural Cladding", cat: "Cladding", img: cladding, location: "Newstead" },
  { title: "Custom Interior Fit-Off", cat: "Fit-Off", img: fitoff, location: "Brisbane" },
  { title: "Hardwood Deck & Pergola", cat: "Decks", img: deck, location: "Buderim" },
  { title: "Two-Storey Roof Framing", cat: "Framing", img: roof, location: "Caboolture" },
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
