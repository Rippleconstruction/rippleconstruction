import { SERVICE_PAGES } from '@/lib/service-pages';
import { createFileRoute } from '@tanstack/react-router';
import { HomeServicePage } from '@/components/site/HomeServicePage';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/decks')({
  head: () => pageHead('Deck Builder Brisbane & Moreton Bay | Ripple Construction', 'Owner-operated merbau, spotted gum, pine and composite decks in Brisbane and Moreton Bay. Explore $450–$650 per m² guides and request a free quote.', '/decks', { faqs: SERVICE_PAGES[0]?.faqs }),
  component: Page,
});
function Page() { return <HomeServicePage index={0} />; }
