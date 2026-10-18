import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const NAV = [
  { to: '/', label: 'Home' }, { to: '/decks', label: 'Decks' }, { to: '/fencing', label: 'Fencing' },
  { to: '/retaining-walls', label: 'Retaining Walls' }, { to: '/excavation', label: 'Excavation' },
  { to: '/projects', label: 'Projects' }, { to: '/for-builders', label: 'For Builders' }, { to: '/contact', label: 'Contact' },
] as const;
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  const light = pathname === '/' && !scrolled && !open;
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${light ? 'bg-transparent text-bone' : 'bg-background/95 text-foreground backdrop-blur-md border-b border-border'}`}><div className="container-x flex h-16 md:h-20 items-center justify-between gap-3"><Link to="/" className="flex items-center gap-2 shrink-0"><span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold">R</span><span className="flex flex-col leading-none"><span className="font-display text-lg font-bold">Ripple</span><span className="mt-1 text-[10px] uppercase opacity-70">Construction</span></span></Link><nav aria-label="Main navigation" className="hidden xl:flex items-center gap-4">{NAV.map(n => <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === '/' }} className="text-sm font-medium whitespace-nowrap opacity-80 hover:opacity-100" activeProps={{ className: 'opacity-100' }}>{n.label}</Link>)}</nav><div className="flex items-center gap-3"><a href="tel:+61436802414" className="flex items-center gap-2 text-xs sm:text-sm font-semibold whitespace-nowrap"><Phone className="h-4 w-4" /><span>0436 802 414</span></a><Button asChild className="btn-timber hidden md:inline-flex h-auto py-2.5 px-4 text-sm"><Link to="/" hash="quote">Get a Quote</Link></Button><Button variant="ghost" size="icon" onClick={() => setOpen(v => !v)} className="xl:hidden border border-current/20" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</Button></div></div>{open && <nav id="mobile-menu" aria-label="Mobile navigation" className="xl:hidden border-t border-border bg-background text-foreground max-h-[calc(100svh-5rem)] overflow-y-auto"><div className="container-x py-4 flex flex-col gap-1">{NAV.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-base font-medium border-b border-border/60">{n.label}</Link>)}<Button asChild className="btn-timber mt-3 h-auto"><Link to="/" hash="quote" onClick={() => setOpen(false)}>Get a Quote</Link></Button></div></nav>}</header>;
}
