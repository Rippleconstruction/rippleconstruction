import { SERVICE_PAGES } from '@/lib/service-pages';
import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/pergolas')({
  head: () => pageHead('Pergolas Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated timber and steel pergolas, open or roofed, attached or freestanding across Brisbane and Moreton Bay. Combine your deck and pergola in one job.', '/pergolas', { faqs: SERVICE_PAGES[1]?.faqs }),
  component: Page,
});
function Page() { return <HomeServicePage index={1} />; }