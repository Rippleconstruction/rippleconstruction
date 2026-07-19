import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, HardHat, Handshake, MessagesSquare, Shield } from "lucide-react";
import about from "@/assets/about.jpg";
import framing from "@/assets/framing.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ripple Construction — QLD Carpentry Subcontractors" },
      { name: "description", content: "Ripple Construction is a dependable carpentry subcontractor committed to quality workmanship, safety and long-term relationships with builders, developers and homeowners across South East Queensland." },
      { property: "og:title", content: "About Ripple Construction" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const PILLARS = [
  { icon: HardHat, title: "Craft first", body: "Qualified carpenters who take pride in the work — because it's their name on the frame too." },
  { icon: Shield, title: "Safety focused", body: "Site-safe systems, current tickets and a culture that puts the crew home in one piece." },
  { icon: MessagesSquare, title: "Clear communication", body: "Straight answers, realistic timelines and no surprises on the day of pour or inspection." },
  { icon: Handshake, title: "Long-term relationships", body: "We work with builders looking for a subcontractor they can book again, not chase down." },
];

function About() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />About us</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1] max-w-4xl">
              Built on trust, delivered on time.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Ripple Construction is a South East Queensland carpentry subcontractor working
              alongside builders, developers and homeowners who care about quality and program.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={about} alt="Ripple Construction team on site reviewing plans" loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Our story</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
              A carpentry crew you can build a program around.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ripple Construction was founded on a simple idea: builders deserve a carpentry
                subcontractor that actually turns up, communicates and finishes what it starts.
              </p>
              <p>
                From framing packages on new residential estates to structural carpentry on
                commercial fit-outs, we've built our reputation on reliable crews, clean sites and
                workmanship that passes inspection first time.
              </p>
              <p>
                Today we work with respected builders, developers and homeowners across Brisbane,
                Moreton Bay and the Sunshine Coast — and most of our work comes from repeat
                clients and referrals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />What we stand for</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">Four things we won't compromise on.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-[var(--bone)]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal delay={100}>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Where we work</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">Servicing South East Queensland.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our crews operate daily across three key regions — with mobilised teams and a
              scheduling system built for multi-site programs.
            </p>
            <ul className="mt-6 space-y-3">
              {["Brisbane metro & surrounds", "Moreton Bay region", "Sunshine Coast & hinterland"].map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--timber)] mt-0.5 shrink-0" />
                  <span className="text-foreground">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={framing} alt="Framing carpenters on a Queensland job site" loading="lazy" width={1400} height={1000} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
