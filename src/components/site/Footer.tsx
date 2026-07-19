import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--bone)]">
      <div className="container-x py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--bone)] text-[var(--ink)] font-display font-bold">
              R
            </span>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold">Ripple Construction</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                Carpentry Subcontractors · QLD
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/70 leading-relaxed">
            Reliable carpentry subcontractors delivering framing, cladding, fit-off, fencing,
            retaining walls and structural carpentry across Brisbane, Moreton Bay and the Sunshine
            Coast — for builders, developers and homeowners.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Company</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[var(--timber)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[var(--timber)]">Services</Link></li>
            <li><Link to="/projects" className="hover:text-[var(--timber)]">Projects</Link></li>
            <li><Link to="/why-choose" className="hover:text-[var(--timber)]">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--timber)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--timber)]" /> 0400 000 000</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--timber)]" /> info@rippleconstruction.com.au</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--timber)]" /> Brisbane · Moreton Bay · Sunshine Coast</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Ripple Construction Pty Ltd. All rights reserved.</div>
          <div>ABN 00 000 000 000 · Fully Insured</div>
        </div>
      </div>
    </footer>
  );
}
