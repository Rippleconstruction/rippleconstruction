import { SERVICE_PAGES } from '@/lib/service-pages';
import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/excavation')({
  head: () => pageHead('Excavation & Site Prep Brisbane & Moreton Bay | Ripple Construction', 'Mini excavator site levelling, footing holes, trenching and turf, paving and slab preparation across Brisbane and Moreton Bay. Request a free site quote.', '/excavation', { faqs: SERVICE_PAGES[4]?.faqs }),
  component: Page,
});
function Page() { return <HomeServicePage index={4} />; }
