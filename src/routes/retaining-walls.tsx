import { SERVICE_PAGES } from '@/lib/service-pages';
import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/retaining-walls')({
  head: () => pageHead('Retaining Walls Brisbane & Moreton Bay | Ripple Construction', 'Timber and concrete sleeper retaining walls with galvanised steel posts and drainage in Brisbane and Moreton Bay. View guides and request a free quote.', '/retaining-walls', { faqs: SERVICE_PAGES[2]?.faqs }),
  component: Page,
});
function Page() { return <HomeServicePage index={2} />; }
