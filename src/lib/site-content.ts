import deck from '@/assets/deck.webp';
import fencing from '@/assets/fencing.webp';
import retaining from '@/assets/retaining-wall.webp';
import sitePrep from '@/assets/retaining_wall_finish.webp';

export const AREAS = ['North Lakes', 'Mango Hill', 'Kallangur', 'Petrie', 'Strathpine', 'Albany Creek', 'Narangba', 'Burpengary', 'Morayfield', 'Caboolture', 'Redcliffe', 'Deception Bay', 'Bray Park', 'Everton Park', 'Aspley', 'Chermside', 'Kedron', 'Samford', 'Dayboro'];
export const GOOGLE_REVIEWS = 'https://g.page/r/CRxje3w2q4ILEBM/review';
export const GOOGLE_PROFILE = 'https://share.google/rlIHZsd0qFLOK32fO';
export const HOME_SERVICES = [
  { title: 'Decks', to: '/decks', description: 'Hardwood, pine and composite decks, low-set and elevated.', price: 450, unit: 'per m² installed', img: deck, alt: 'Completed low-set composite deck with horizontal fascia boards beside a home', details: ['Hardwood, treated pine and composite decking', 'Low-set and elevated decks, stairs and finishing details', 'Site measurement and a fixed, itemised quote'], body: 'A well-built deck starts with the right structure. Michael works with you on the layout, materials and finish, from a simple backyard deck to an elevated outdoor living space.' },
  { title: 'Fencing', to: '/fencing', description: 'Colorbond and timber fences, gates and old fence removal.', price: 130, unit: 'per metre installed', img: fencing, alt: 'Completed timber paling fence following a residential boundary', details: ['Colorbond and timber boundary fences', 'Gates and old fence removal', 'Clear set-out and an itemised installation quote'], body: 'Create privacy and a clear boundary with a fence built straight and properly finished. We quote the fence, gates and any removal work together so you know what is included.' },
  { title: 'Retaining Walls', to: '/retaining-walls', description: 'Timber and concrete sleeper walls on galvanised steel posts, with drainage.', price: 350, unit: 'per m² of wall', img: retaining, alt: 'Concrete sleeper retaining wall on steel posts along a property boundary', details: ['Timber and concrete sleeper walls', 'Galvanised steel posts and drainage', 'Site-specific scope, access and engineering requirements'], body: 'Manage changes in ground level with a retaining wall suited to your property. We consider access, drainage and the site conditions before providing a fixed quote; engineering and approvals are assessed for each job.' },
  { title: 'Excavation & Site Prep', to: '/excavation', description: 'Mini excavator work for levelling, footings, turf and paving prep.', price: null, unit: 'Priced per job', img: sitePrep, alt: 'Exposed ground and earthworks beside a newly installed concrete sleeper wall', details: ['Mini excavator work and site levelling', 'Footing excavation, turf and paving preparation', 'Access, ground conditions and removal assessed per job'], body: 'Get the ground ready for the next stage. From levelling a yard to preparing footings, turf or paving, Michael assesses the access and scope before quoting the work as one job.' },
] as const;
export function servicePrice(service: {price: number | null; unit: string}) {
  return service.price === null ? service.unit : `From $${service.price} ${service.unit}`;
}
