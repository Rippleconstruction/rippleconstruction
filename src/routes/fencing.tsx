import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/fencing')({
  head: () => pageHead('Fencing Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated fencing across Brisbane and Moreton Bay. Get a fixed, itemised quote from Michael at Ripple Construction.', '/fencing'),
  component: Page,
});
function Page() { return <HomeServicePage index={1} />; }
