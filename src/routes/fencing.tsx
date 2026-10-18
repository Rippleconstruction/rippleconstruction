import { SERVICE_PAGES } from '@/lib/service-pages';
import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/fencing')({
  head: () => pageHead('Fencing Contractor Brisbane & Moreton Bay | Ripple Construction', 'Colorbond and timber fences, single and double gates and old fence removal across Brisbane and Moreton Bay. View price guides and get a free quote.', '/fencing', { faqs: SERVICE_PAGES[1]?.faqs }),
  component: Page,
});
function Page() { return <HomeServicePage index={1} />; }
