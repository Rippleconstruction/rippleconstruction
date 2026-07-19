import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ripple Construction — Carpentry Subcontractor Quotes QLD" },
      { name: "description", content: "Get in touch with Ripple Construction for carpentry subcontractor quotes across Brisbane, Moreton Bay and the Sunshine Coast." },
      { property: "og:title", content: "Contact Ripple Construction" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more about the project").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 bg-secondary/40">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-8 bg-[var(--timber)]" />Contact</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1] max-w-4xl">
              Let's talk about your next project.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Send us your plans, scope and timeline. We'll get back to you with a straight
              answer within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
              {sent ? (
                <div className="min-h-[400px] grid place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--timber)]/15 text-[var(--timber-deep)]">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold">Thanks — we've got it.</h2>
                    <p className="mt-2 text-muted-foreground max-w-md">
                      A member of our team will be in touch within one business day to discuss
                      your project.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name *" name="name" error={errors.name} />
                    <Field label="Company" name="company" error={errors.company} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email *" name="email" type="email" error={errors.email} />
                    <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Service of interest</label>
                    <select
                      name="service"
                      defaultValue=""
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--timber)]"
                    >
                      <option value="">Select a service…</option>
                      {["Timber Framing", "Wall & Roof Framing", "Structural Carpentry", "External Cladding", "Internal Fit-Off", "Decks & Outdoor Structures", "Fencing", "Retaining Walls", "Renovations", "General Carpentry"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Project details *</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Location, scope, timeline, plans available…"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--timber)]"
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-timber justify-center">
                    Send enquiry <Send className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your enquiry. We don't share
                    your details.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-6">
              <InfoCard icon={Phone} label="Phone" value="0400 000 000" href="tel:+61400000000" />
              <InfoCard icon={Mail} label="Email" value="info@rippleconstruction.com.au" href="mailto:info@rippleconstruction.com.au" />
              <InfoCard icon={MapPin} label="Service Area" value="Brisbane · Moreton Bay · Sunshine Coast" />

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Service area map — South East Queensland"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=152.4%2C-27.7%2C153.4%2C-26.5&layer=mapnik&marker=-27.1%2C152.95"
                  className="w-full aspect-[4/3] block"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-[var(--timber)]"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-[var(--timber)] transition-colors">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--ink)] text-[var(--bone)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
