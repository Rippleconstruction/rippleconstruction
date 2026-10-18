import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/retaining-walls')({
  head: () => pageHead('Retaining Walls Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated retaining walls across Brisbane and Moreton Bay. Get a fixed, itemised quote from Michael at Ripple Construction.', '/retaining-walls'),
  component: Page,
});
function Page() { return <HomeServicePage index={2} />; }
