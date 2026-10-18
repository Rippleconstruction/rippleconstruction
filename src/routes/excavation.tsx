import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/excavation')({
  head: () => pageHead('Excavation & Site Prep Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated excavation & site prep across Brisbane and Moreton Bay. Get a fixed, itemised quote from Michael at Ripple Construction.', '/excavation'),
  component: Page,
});
function Page() { return <HomeServicePage index={3} />; }
