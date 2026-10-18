import type { JOB_TYPES } from './quote-schema';
export type ServicePageContent = {
  heading: string; jobType: typeof JOB_TYPES[number]; intro: string[]; builds: string[];
  prices: { label: string; min: number | null; max: number | null; unit: string }[];
  gallery: string[]; faqs: { question: string; answer: string }[];
};
export const SERVICE_PAGES: ServicePageContent[] = [
  {
    heading: 'Deck Builder Brisbane & Moreton Bay', jobType: 'Deck',
    intro: [
      'A deck should feel like a natural extension of your home: somewhere to share a meal, watch the kids play or unwind outside. Ripple Construction builds low-set and elevated decks for homeowners across Brisbane and Moreton Bay, with the layout, structure and finish considered together. Whether you are starting with an unused patch of yard or replacing a tired deck, Michael helps you work out a practical scope before any work starts.',
      'We work with merbau, spotted gum, treated pine and composite decking. Each has a different appearance, maintenance routine and price, so we talk through the options rather than pushing one material for every property. Stairs, balustrades and hidden fixing options can be included where suitable. We also assess repairs and rebuilds, including the condition of the existing frame; a new surface is only worthwhile when the structure underneath is sound.',
      'From North Lakes and Albany Creek to Narangba and Strathpine, the process starts with photos, rough measurements and a conversation about how you want to use the space. Access, ground levels, drainage and any approval requirements are checked when we measure up. You receive a fixed, itemised quote so you can see what is included and compare options clearly. We also work in Redcliffe, Caboolture and Chermside, and surrounding Brisbane North suburbs.',
      'Choosing an owner-operated, qualified carpenter means the person who quotes your deck is the person building it. Michael stays involved in the details, from the set-out to the final boards and steps. You have one point of contact for questions and changes, with the materials, scope and expectations agreed before the job proceeds. Send a few photos of your outdoor space and we will help you take the next step with a free ballpark price.'
    ],
    builds: ['Merbau, spotted gum, treated pine and composite decks', 'Low-set and elevated decks', 'Stairs and balustrades', 'Deck repairs and rebuilds', 'Hidden fixing options'],
    prices: [{ label: 'Decks', min: 450, max: 650, unit: 'per m²' }],
    gallery: ['Merbau decking', 'Spotted gum decking', 'Treated pine decking', 'Composite decking', 'Elevated deck and stairs', 'Balustrades and finishing details'],
    faqs: [
      { question: 'How much does a deck cost in Brisbane?', answer: 'Our typical guide is $450–$650 per m². Height, materials, stairs, balustrades, access and the required structure affect the total. Send photos and rough measurements for a ballpark price, followed by a fixed, itemised quote.' },
      { question: 'Do I need council approval for a deck?', answer: 'Decks over 1m high or attached to some structures usually need building approval. Requirements depend on the property and design; we will tell you what needs checking at the quote and confirm any certifier or council requirements before work proceeds.' },
      { question: 'How long does a deck take to build?', answer: 'The time depends on size, height, site access, materials and any approvals. We discuss the expected build time with your itemised quote rather than promise a timeframe before inspecting the job.' },
      { question: 'Hardwood or composite?', answer: 'Hardwood has a natural grain and usually needs regular cleaning and recoating. Composite offers a consistent finish with a different maintenance routine. We compare appearance, upkeep, budget and suitability for your space.' },
      { question: 'Can you repair my existing deck?', answer: 'Yes, we assess deck repairs and rebuilds. We check the boards, frame, posts and connections before recommending repairs or replacement, so the work addresses more than the visible surface.' }
    ]
  },
  {
    heading: 'Pergolas Brisbane & Moreton Bay', jobType: 'Pergola',
    intro: [
      'A pergola makes your outdoor space a more comfortable place to spend time, whether you want an open timber feature over a garden or a roofed area for meals and afternoons outside. Ripple Construction designs and builds timber and steel pergolas for homeowners across Brisbane and Moreton Bay. Michael helps you choose a layout that suits your home, the way you use your yard and the finish you have in mind.',
      'Open pergolas provide definition and filtered shade, while roofed designs offer more protection from the weather. Roofing options include Colorbond, insulated panels and polycarbonate. Each handles light, heat and rain differently, so we discuss the practical trade-offs alongside appearance and budget. Timber offers natural character; steel can suit a clean-lined design. The final structure and connections are designed for the span, roofing and site conditions, not chosen on looks alone.',
      'We build attached and freestanding pergolas, including flyover-style roofs and pergolas over new or existing decks. If you are planning both, we design and build the deck and pergola together as one job, considering posts, levels, roof drainage and access from the start. For an existing deck, we check its frame, footings and condition before confirming what it can support. Preparation for lighting and fan wiring can be included, with electrical installation carried out by a licensed electrician.',
      'From North Lakes and Albany Creek to Narangba and Strathpine, send photos and rough measurements to start the conversation. We also work in Redcliffe, Caboolture and Chermside. Michael checks house connections, boundaries, access and approval requirements at the quote; many roofed or attached pergolas need building approval. The person who quotes your job builds it, giving you one point of contact. You receive a fixed, itemised quote with the scope agreed upfront. Send us photos for a free ballpark price.'
    ],
    builds: ['Open timber pergolas', 'Roofed pergolas: Colorbond, insulated panel and polycarbonate', 'Attached and freestanding pergolas', 'Pergolas over new or existing decks', 'Flyover-style roofs', 'Lighting and fan wiring prep — electrical installation by a licensed electrician'],
    prices: [],
    gallery: ['Open timber pergola', 'Colorbond roofed pergola', 'Insulated panel roof', 'Polycarbonate roof', 'Pergola over a deck', 'Freestanding and flyover-style designs'],
    faqs: [
      { question: 'How much does a pergola cost in Brisbane?', answer: 'We don’t publish a starting price for pergolas because there are too many variables — size, roof type, span, foundations, house connections, access and approvals all change the total. Send us photos and rough measurements for a free ballpark price, followed by a fixed, itemised quote.' },
      { question: 'Do I need council approval for a pergola?', answer: 'Many roofed or attached pergolas need building approval, especially near boundaries. We will check this at the quote and confirm any certifier or council requirements for your property and design before work proceeds.' },
      { question: 'Timber or steel?', answer: 'Timber offers a natural look and can need regular coating and maintenance. Steel suits clean-lined designs with its own protective finish and maintenance requirements. We compare appearance, budget, roof choice and the structure needed for your site before recommending an option.' },
      { question: 'Can you build a pergola over my existing deck?', answer: 'Yes, subject to checking the deck’s frame, footings, condition and capacity for the proposed pergola. Extra supports or upgrades may be needed. If you are planning a new deck, we can design and build the deck and pergola together as one job.' },
      { question: 'How long does it take?', answer: 'Build time depends on the size, structure, roofing, site access and any approvals or deck upgrades. Michael discusses the expected timeframe with your itemised quote once the scope and site requirements are confirmed.' }
    ]
  },
  {
    heading: 'Fencing Contractor Brisbane & Moreton Bay', jobType: 'Fence',
    intro: [
      'A good fence gives your home privacy, a clear boundary and a tidy finish without making the yard harder to use. Ripple Construction installs Colorbond and timber paling fences for homeowners across Brisbane and Moreton Bay. We can include single or double gates and removal of the old fence, so the whole job is considered together rather than leaving you to organise the awkward parts separately.',
      'Colorbond is available in a range of colours to suit your home, roof and garden. Timber paling fencing offers a familiar, natural look and can suit a variety of residential boundaries. We discuss the height, finish, gate openings and ground levels before recommending a scope. If the fence sits on a retaining wall, its fixing and the wall’s suitability need careful assessment; we do not assume an existing wall can take the extra load.',
      'We work around North Lakes, Albany Creek, Narangba and Strathpine, as well as Redcliffe, Caboolture and Chermside. Photos of the boundary and rough lengths are a useful starting point. At the site visit, Michael checks access, changes in level, removal requirements and the position of gates. Boundary locations and neighbour arrangements should be clear before installation. Where a boundary is uncertain, it may need confirmation by a surveyor rather than relying on the old fence line.',
      'With an owner-operated, qualified carpenter, the person quoting your fence also builds it. You can talk directly about practical details such as gate clearances, keeping access to the yard and how the finished fence meets existing structures. A fixed, itemised quote sets out the agreed work, materials and removal, with site-specific requirements explained upfront. Whether you are replacing a leaning fence or finishing a new yard, send photos and approximate measurements for a free ballpark price before deciding on the next step.'
    ],
    builds: ['Colorbond fences in all colours', 'Timber paling fences', 'Single and double gates', 'Old fence removal', 'Fencing on retaining walls'],
    prices: [{ label: 'Colorbond fencing', min: 130, max: 170, unit: 'per metre' }, { label: 'Timber fencing', min: 140, max: 190, unit: 'per metre' }],
    gallery: ['Colorbond boundary fence', 'Timber paling fence', 'Single access gate', 'Double driveway gates', 'Replacement boundary fence', 'Fence above a retaining wall'],
    faqs: [
      { question: 'How much does a new fence cost?', answer: 'Typical guides are $130–$170 per metre for Colorbond and $140–$190 per metre for timber fencing. Height, gates, old fence removal, access and ground conditions affect the final quote.' },
      { question: 'Do you remove the old fence?', answer: 'Yes, old fence removal can be included. Let us know its material and condition so removal and disposal can be itemised. Suspected asbestos needs specialist assessment and is not treated as ordinary fence waste.' },
      { question: 'Can I share the cost with my neighbour?', answer: 'Neighbour arrangements depend on your circumstances and Queensland dividing-fence requirements. Agree on the scope and cost arrangements before work starts; we can provide an itemised quote for that discussion.' },
      { question: 'Do fences need approval?', answer: 'Approval requirements depend on height, location, overlays and whether the fence is on a retaining wall or forms a pool barrier. We identify what needs checking at the quote; pool fencing has separate safety requirements.' },
      { question: 'Can you add gates or fence above a retaining wall?', answer: 'Yes, we quote single and double gates and assess fencing on retaining walls. Gate clearances, post supports and the wall’s capacity need to be checked before agreeing on the installation.' }
    ]
  },
  {
    heading: 'Retaining Walls Brisbane & Moreton Bay', jobType: 'Retaining wall',
    intro: [
      'Changes in ground level can make a yard difficult to use and leave garden beds or outdoor areas feeling unfinished. Ripple Construction builds timber and concrete sleeper retaining walls for homeowners across Brisbane and Moreton Bay. The aim is a wall that suits the site, manages the retained ground properly and creates practical space for the way you want to use your property.',
      'We discuss timber sleeper and concrete sleeper options, including galvanised steel posts, ag drainage and gravel backfill. Materials are only part of the decision: wall height, soil conditions, nearby structures and water all matter. Drainage behind the wall needs an appropriate outlet, not just a pipe buried in gravel. Any engineering or approval requirements are assessed for the individual job before the design and scope are finalised.',
      'Homeowners in North Lakes, Albany Creek, Narangba and Strathpine often start by sending photos of a sloping yard, an old wall or a proposed garden bed. We also service Redcliffe, Caboolture and Chermside, and surrounding Brisbane North suburbs. Rough wall lengths and heights help us give an initial ballpark price. At the site visit, Michael checks levels, machine access, existing drainage and what sits above or beside the proposed wall. Soil removal, access constraints and any fencing are considered together.',
      'Using an owner-operated, qualified carpenter gives you a direct conversation with the person doing the work. Michael quotes the agreed scope and remains your point of contact through the job, so changes and practical questions do not get lost between teams. Your fixed, itemised quote makes the materials and included work clear, with engineering and approval needs identified rather than assumed away. Whether you need a garden-bed wall or want to reclaim a more usable section of yard, send photos and approximate dimensions for a free ballpark price and an honest discussion about the next steps.'
    ],
    builds: ['Timber sleeper walls', 'Concrete sleeper walls', 'Galvanised steel posts', 'Ag drainage and gravel backfill', 'Walls for levelling yards and garden beds'],
    prices: [{ label: 'Retaining walls', min: 350, max: 600, unit: 'per m² of wall' }],
    gallery: ['Timber sleeper wall', 'Concrete sleeper wall', 'Galvanised steel posts', 'Drainage and gravel backfill', 'Levelled backyard', 'Retained garden beds'],
    faqs: [
      { question: 'How much does a retaining wall cost?', answer: 'The typical guide is $350–$600 per m² of wall face, calculated from wall length and height. Access, excavation, drainage, material choice, engineering and disposal affect the final itemised quote.' },
      { question: 'Does my retaining wall need approval or engineering?', answer: 'Requirements depend on height, boundaries, ground conditions and loads from nearby buildings, driveways or fences. Even a lower wall can need assessment. We flag the requirements at the quote and confirm the appropriate design before proceeding.' },
      { question: 'Timber or concrete sleepers?', answer: 'Timber provides a natural appearance; concrete sleepers offer a different finish and durability profile. We discuss the site, intended use and budget, then confirm the suitable posts, sleepers and design for the job.' },
      { question: 'Why is drainage behind the wall important?', answer: 'Water building up behind a wall increases pressure. Ag drainage and gravel backfill help manage that water, but the drainage must have a suitable outlet and match the site and design requirements.' },
      { question: 'Can you replace an old retaining wall?', answer: 'Yes, we assess replacements, including removal, retained ground, access and nearby structures. Send photos of the whole wall and any movement or drainage problems so we can plan the site inspection.' }
    ]
  },
  {
    heading: 'Excavation & Site Prep Brisbane & Moreton Bay', jobType: 'Excavation',
    intro: [
      'Getting the ground right makes the next stage of a home project much easier. Ripple Construction offers mini excavator work and site preparation for homeowners across Brisbane and Moreton Bay. We help with site levelling, footing holes, trenching and preparation for turf, paving and slabs, with the scope matched to what you are building rather than digging first and sorting the details later.',
      'We use 1.7t and 2.5t machines, with suitability assessed against the access and work required. Gate width, overhead clearance, ground conditions and space to move all influence the plan. We discuss the intended levels, materials to be removed and what finish the next contractor or stage needs. Preparation for a slab or footing follows the relevant plans and requirements; it is not a substitute for structural design or the checks required before concrete is placed.',
      'From North Lakes and Albany Creek to Narangba and Strathpine, photos of the yard and access path are a useful first step. We also work in Redcliffe, Caboolture and Chermside, and surrounding Brisbane North suburbs. Let us know the rough area, the purpose of the work and whether soil needs to leave the property. Michael checks the site before confirming the approach, including nearby structures, drainage and underground services. Services must be located and the work planned safely before any digging starts.',
      'As an owner-operated business led by a qualified carpenter, we understand how the ground preparation connects to decks, fences, retaining walls and other home improvements. The person quoting your job stays involved in delivering it, giving you one contact for the scope and practical questions. Excavation is priced to the job because access, soil, disposal and the required finish can change the work substantially. Send photos, rough measurements and any plans for a free ballpark price, followed by a fixed, itemised quote once the site and scope are confirmed.'
    ],
    builds: ['Site levelling', 'Footing holes', 'Trenching', 'Preparation for turf, paving and slabs', '1.7t and 2.5t machines'],
    prices: [{ label: 'Excavation', min: null, max: null, unit: 'Daily rate to be confirmed · priced per job' }],
    gallery: ['Site levelling', 'Footing holes', 'Service trenching', 'Turf preparation', 'Paving and slab preparation', 'Mini excavator access'],
    faqs: [
      { question: 'How much does excavation cost?', answer: 'Excavation is priced per job after assessing access, ground conditions, the scope and any soil removal. A daily rate has not been published. Send photos and rough measurements for a free ballpark price.' },
      { question: 'Can a mini excavator fit into my backyard?', answer: 'We assess access for our 1.7t and 2.5t machines. Send the narrowest opening measurement and photos showing gates, side paths, overhead obstacles and the work area; machine suitability is confirmed for your site.' },
      { question: 'What happens to the excavated soil?', answer: 'We agree whether soil stays onsite or is removed, and include the agreed handling and disposal in the quote. The amount, access and soil condition affect that scope.' },
      { question: 'Do underground services need checking?', answer: 'Yes. Underground services must be located and the digging plan checked before work starts. Available service plans alone may not identify every private line, so additional locating may be needed.' },
      { question: 'Can you prepare for turf, paving or a slab?', answer: 'Yes, we quote preparation for those next stages. The required levels, drainage, base and any structural plans need to be agreed first so the ground is prepared for the intended finish.' }
    ]
  }
];
