import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/decks')({
  head: () => pageHead('Decks Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated decks across Brisbane and Moreton Bay. Get a fixed, itemised quote from Michael at Ripple Construction.', '/decks'),
  component: Page,
});
function Page() { return <HomeServicePage index={0} />; }
