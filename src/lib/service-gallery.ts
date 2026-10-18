import deckStairs from '@/assets/project1.webp';
import colorbond from '@/assets/project2.webp';
import retainingFinish from '@/assets/retaining_wall_finish.webp';
import lawn from '@/assets/lawn_1.webp';
import deckRail from '@/assets/timber-deck-balustrade.webp.asset.json';
import siteWorks from '@/assets/metal-fence-site-works.webp.asset.json';
import gate from '@/assets/timber-access-gate.webp.asset.json';
import fence from '@/assets/timber-boundary-fence.webp.asset.json';
import wall from '@/assets/fence-concrete-retaining-wall.webp.asset.json';
import chainWire from '@/assets/chain-wire-fence.webp.asset.json';

export type GalleryPhoto = { src: string; title: string; alt: string };
export const NEW_JOB_PHOTOS = {
  deckRail: { src: deckRail.url, title: 'Timber Deck & Balustrade', alt: 'Timber deck with timber-trimmed panel balustrade beside a weatherboard home, work in progress' },
  siteWorks: { src: siteWorks.url, title: 'Metal Fencing & Site Works', alt: 'Metal fence panels beside exposed earthworks and a concrete retaining edge' },
  gate: { src: gate.url, title: 'Timber Access Gate', alt: 'Timber paling side-access gate beside a concrete sleeper retaining wall' },
  fence: { src: fence.url, title: 'Timber Boundary Fence', alt: 'Timber paling boundary fence beside a residential driveway' },
  wall: { src: wall.url, title: 'Timber Fence & Concrete Sleeper Wall', alt: 'Timber paling fence above a concrete sleeper retaining wall with steel posts' },
  chainWire: { src: chainWire.url, title: 'Chain-Wire Boundary Fence', alt: 'Chain-wire boundary fence with metal posts and wire strands along a gravel driveway' },
} satisfies Record<string, GalleryPhoto>;

export const SERVICE_GALLERIES: Record<string, GalleryPhoto[]> = {
  Deck: [
    { src: deckStairs, title: 'Composite Deck & Timber Stairs', alt: 'Composite deck with timber stairs and horizontal fascia boards' },
    NEW_JOB_PHOTOS.deckRail,
  ],
  Pergola: [],
  Fence: [
    { src: colorbond, title: 'Colorbond Boundary Fence', alt: 'Colorbond boundary fence beside a raised Queensland home' },
    NEW_JOB_PHOTOS.fence, NEW_JOB_PHOTOS.gate, NEW_JOB_PHOTOS.chainWire,
  ],
  'Retaining wall': [
    { src: retainingFinish, title: 'Concrete Sleeper Retaining Wall', alt: 'Concrete sleeper retaining wall on steel posts beside exposed ground' },
    NEW_JOB_PHOTOS.wall,
  ],
  Excavation: [
    NEW_JOB_PHOTOS.siteWorks,
    { src: lawn, title: 'Site Finish & Garden Edging', alt: 'Finished turf and mulched garden beds with timber edging around a raised home' },
  ],
};