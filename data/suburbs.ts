export type Suburb = {
  slug: string;
  name: string;
  region: "Bayside Melbourne";
  priority: "Core Bayside" | "Nearby Bayside" | "Surrounding Suburbs";
  nearbySuburbs: string[];
  postcode: string;
  localLandmark: string;
  propertyTypes: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  serviceAreaDescription: string;
  descriptions: {
    professional: string[];
    maintenance: string[];
    construction: string[];
    outdoor: string[];
    why: string[];
  };
  faqs: { question: string; answer: string }[];
};

export const locationServices = [
  "Landscaping",
  "Garden design",
  "Garden maintenance",
  "Turf installation",
  "Lawn care",
  "Paving",
  "Retaining walls",
  "Planting",
  "Garden clean-ups",
  "Outdoor space upgrades",
] as const;

export const serviceAreaIntroServices = [
  "landscaping",
  "garden maintenance",
  "lawn care",
  "turf installation",
  "paving",
  "retaining walls",
  "planting",
  "garden clean-ups",
  "outdoor entertaining area upgrades",
];

const sharedFaq = {
  quote: (name: string) => ({
    question: `Do you provide free landscaping quotes in ${name}?`,
    answer: `Yes. Greyline Landscaping provides free quotes for landscaping, garden maintenance, turf installation, paving and outdoor upgrades in ${name}. We discuss access, site condition, materials and timing before recommending the right scope.`,
  }),
  services: (name: string) => ({
    question: `What landscaping services are available in ${name}?`,
    answer: `Our landscaping services in ${name} can include garden design, garden maintenance, lawn care, turf laying, planting, paving, retaining walls, mulching, hedging, garden clean-ups and outdoor space upgrades.`,
  }),
};

export const suburbs: Suburb[] = [
  {
    slug: "brighton",
    name: "Brighton",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3186",
    localLandmark: "Bay Street and Brighton Beach",
    propertyTypes: "Bayside homes, period houses, renovated family properties, courtyards, front yards and outdoor entertaining areas",
    metaTitle: "Landscaping Brighton | Greyline Landscaping",
    metaDescription: "Landscaping Brighton by Greyline. Garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Brighton homeowners can rely on, including garden maintenance, turf installation, paving, retaining walls and outdoor upgrades for Bayside homes.",
    serviceAreaDescription:
      "Landscaping Brighton projects often need refined front presentation, practical lawn areas and coastal garden landscaping that suits established Bayside homes.",
    nearbySuburbs: ["Brighton East", "Hampton", "Elwood", "Gardenvale"],
    descriptions: {
      professional: [
        "Professional landscaping in Brighton needs to respect the suburb's established streetscapes while still creating outdoor areas that work for everyday life. Greyline Landscaping helps Brighton homeowners improve front yard landscaping, backyard landscaping, garden structure, planting, lawns, paths and outdoor entertaining areas without overcomplicating the result.",
        "From homes near Bay Street to coastal properties closer to the beach, Brighton gardens often need a balance of tidy presentation, durable materials and planting that can handle Bayside conditions. We plan landscaping services Brighton residents can use long term, with clear quoting and practical recommendations for each property.",
      ],
      maintenance: [
        "Garden maintenance Brighton clients request often starts with bringing an overgrown or tired garden back under control. We can help with lawn care Brighton homes need seasonally, hedging, mulching, planting refreshes, garden clean-ups and general outdoor presentation.",
        "For owners searching for garden maintenance near me or landscaping near me, Greyline offers a local Bayside service area focused on reliable communication and tidy finishes. Whether the yard needs a one-off clean-up or support after a larger upgrade, the goal is a garden that stays usable and presentable.",
      ],
      construction: [
        "Turf installation Brighton projects require more than simply placing new grass over old ground. We look at preparation, levels, edges and drainage so turf laying Brighton yards receive sits neatly with garden beds, paving and access points.",
        "Paving Brighton homes can rely on should improve movement through the garden and reduce muddy, worn areas. Retaining walls Brighton properties need are planned around site levels, drainage, planting and how the finished landscape connects to the home.",
      ],
      outdoor: [
        "Outdoor spaces in Brighton often need to support entertaining, family use and street appeal in the same garden. We create front yard landscaping that feels neat from the street and backyard landscaping that makes lawns, courtyards, pathways and entertaining areas easier to enjoy.",
        "As a Bayside landscaper, Greyline considers coastal garden landscaping, irrigation needs, mulching, shade, privacy and planting choices that suit Brighton's mix of classic homes and contemporary renovations.",
      ],
      why: [
        "Choose Greyline Landscaping in Brighton for clear quotes, local Bayside knowledge and a practical approach to residential landscapes. We do not claim a separate office in every suburb; we service Brighton as part of our local Bayside Melbourne service area.",
        "Our work is suited to homeowners who want landscaping, garden design, garden maintenance, turf installation, lawn care, paving, retaining walls and outdoor space upgrades handled with a clean finish.",
      ],
    },
    faqs: [
      sharedFaq.quote("Brighton"),
      sharedFaq.services("Brighton"),
      {
        question: "Can you help with coastal garden landscaping in Brighton?",
        answer:
          "Yes. Brighton gardens can be affected by wind, sun and coastal exposure, so we recommend practical planting, mulching, lawn preparation and materials that suit the property and maintenance expectations.",
      },
      {
        question: "Do you offer turf installation and turf laying in Brighton?",
        answer:
          "Yes. We provide turf installation and turf laying in Brighton for front yards, backyards and worn lawn areas, with preparation and edging considered before installation.",
      },
      {
        question: "Can Greyline upgrade Brighton outdoor entertaining areas?",
        answer:
          "Yes. We can help with paving, planting, lawn areas, retaining edges, garden clean-ups and outdoor space upgrades that make Brighton entertaining areas cleaner and more useful.",
      },
    ],
  },
  {
    slug: "brighton-east",
    name: "Brighton East",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3187",
    localLandmark: "Dendy Park",
    propertyTypes: "renovated family homes, period houses, townhouses and larger backyard blocks",
    metaTitle: "Landscaping Brighton East | Greyline",
    metaDescription: "Landscaping Brighton East for garden maintenance, turf, lawn care, paving, retaining walls and outdoor upgrades. Free quotes.",
    heroText:
      "Greyline Landscaping provides landscaping Brighton East homeowners need for practical gardens, garden maintenance, turf installation, paving, retaining walls and outdoor space upgrades.",
    serviceAreaDescription:
      "Brighton East landscaping commonly focuses on family backyards, practical lawns, front garden upgrades and outdoor spaces close to parks and schools.",
    nearbySuburbs: ["Brighton", "Hampton East", "Bentleigh", "Gardenvale"],
    descriptions: {
      professional: [
        "Professional landscaping in Brighton East often means giving busy family properties clearer zones for lawn, planting, access and entertaining. The suburb has a mix of period homes, renovated houses and newer townhouses, so each landscape needs to be shaped around the block rather than forced into a generic design.",
        "Greyline Landscaping helps Brighton East owners improve tired front yards, patchy back lawns, awkward side paths and unfinished outdoor areas. We focus on landscaping services Brighton East homes can use every day, from neat garden beds to stronger paved connections around the property.",
      ],
      maintenance: [
        "Garden maintenance in Brighton East can include lawn mowing, hedging, mulching, planting refreshes, garden clean-ups and seasonal lawn care. Many properties have established trees or older garden beds, so maintenance is often about making the garden easier to manage without stripping away its character.",
        "If your search started with landscaping near me or garden maintenance near me, Greyline is available across Brighton East and nearby Bayside Melbourne suburbs. We can tidy the existing garden or prepare it for a larger landscaping upgrade.",
      ],
      construction: [
        "Turf installation in Brighton East is useful where children, pets and outdoor entertaining have worn down the lawn. We consider soil preparation, levels and drainage before turf laying so the new lawn fits with the surrounding beds, paths and paved areas.",
        "Paving and retaining walls in Brighton East can make uneven or underused sections much more practical. Retaining edges may support garden beds or level changes, while paving can improve access from the home to the backyard, clothesline, garage or entertaining area.",
      ],
      outdoor: [
        "Outdoor spaces designed for Brighton East homes should be robust enough for family use but still tidy from the street. We help with backyard landscaping, front yard landscaping, planting, irrigation considerations, mulching and outdoor entertaining area upgrades.",
        "The aim is a residential landscape that feels finished and easy to live with: clean lawn edges, practical pathways, healthy planting and materials chosen for the way the household uses the space.",
      ],
      why: [
        "Greyline Landscaping is a Bayside landscaper servicing Brighton East with clear communication, free quotes and a focus on clean project finishing. We plan the work around access, timing, drainage, planting and the level of maintenance you want after handover.",
        "Choose Greyline for landscaping Brighton East projects that need practical advice across garden design, garden maintenance, turf installation, lawn care, paving, retaining walls and planting.",
      ],
    },
    faqs: [
      sharedFaq.quote("Brighton East"),
      sharedFaq.services("Brighton East"),
      {
        question: "Can you landscape family backyards in Brighton East?",
        answer:
          "Yes. We regularly help with Brighton East backyard landscaping, including lawn areas, planting, paving, retaining edges, garden clean-ups and outdoor entertaining area upgrades.",
      },
      {
        question: "Do Brighton East gardens need drainage planning?",
        answer:
          "Some do. If turf, paving or retaining walls are being installed, we review wet or slow-draining areas so drainage is considered as part of the landscaping scope.",
      },
      {
        question: "Can you improve front yard landscaping in Brighton East?",
        answer:
          "Yes. Front yard landscaping can include planting, lawn care, edging, mulching, paths and tidy garden beds to improve street appeal.",
      },
    ],
  },
  {
    slug: "hampton",
    name: "Hampton",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3188",
    localLandmark: "Hampton Street",
    propertyTypes: "period homes, renovated family homes, coastal townhouses and compact villa gardens",
    metaTitle: "Landscaping Hampton | Greyline Landscaping",
    metaDescription: "Landscaping Hampton for Bayside homes. Garden maintenance, lawn care, turf, paving, retaining walls and planting.",
    heroText:
      "Greyline Landscaping provides landscaping Hampton homeowners can use for garden maintenance, lawn care, turf installation, paving, retaining walls and coastal outdoor upgrades.",
    serviceAreaDescription:
      "Hampton landscaping often combines coastal planting, compact courtyards, front garden presentation and practical outdoor entertaining spaces.",
    nearbySuburbs: ["Brighton", "Hampton East", "Sandringham", "Black Rock"],
    descriptions: {
      professional: [
        "Landscaping in Hampton should feel relaxed and coastal while still being durable enough for daily use. Homes around Hampton Street, the beachside streets and quieter residential pockets often need smart planting, tidy lawns, privacy, clean paths and outdoor areas that do not demand constant upkeep.",
        "Greyline Landscaping works with Hampton homeowners on front yard landscaping, backyard landscaping, courtyards, lawns, pathways and outdoor entertaining areas. We bring a practical Bayside approach to landscaping Hampton properties, using the existing home and site conditions as the starting point.",
      ],
      maintenance: [
        "Garden maintenance in Hampton can involve lawn care, hedge trimming, mulching, garden clean-ups and planting that suits the suburb's coastal feel. Compact villa gardens and townhouse courtyards often need careful plant selection and neat edges so the space feels generous rather than crowded.",
        "For Hampton residents looking for a Bayside landscaper or garden maintenance near me, Greyline provides clear advice on what should be cleaned up, replanted, retained or upgraded. Maintenance can also prepare a tired garden for turf laying, paving or a more complete landscape design.",
      ],
      construction: [
        "Turf installation in Hampton is a strong option for worn family lawns, small front yards and back garden areas that need a cleaner finish. Soil preparation, levels and irrigation expectations are discussed before installation so the new lawn can be looked after properly.",
        "Paving and retaining walls in Hampton help connect outdoor entertaining areas, side access and garden beds. Where coastal conditions or level changes are a factor, we plan materials and construction around both appearance and long-term function.",
      ],
      outdoor: [
        "Outdoor spaces designed for Hampton homes often need to work as extensions of the living area. We can help upgrade courtyards, backyards, lawns, paths and planting so the garden feels suitable for entertaining, relaxing and regular household use.",
        "Coastal garden landscaping in Hampton may include hardy planting, mulching, screening, neat lawn edges and paving that keeps sand, mud and worn areas under control.",
      ],
      why: [
        "Choose Greyline Landscaping in Hampton for practical local knowledge across Bayside Melbourne, free quotes and a tidy process from first conversation to clean finish. We service Hampton as part of our local Bayside service area.",
        "Our work suits homeowners who need landscaping, garden design, garden maintenance, turf installation, lawn care, retaining walls, paving and planting handled by one team.",
      ],
    },
    faqs: [
      sharedFaq.quote("Hampton"),
      sharedFaq.services("Hampton"),
      {
        question: "Can you help with coastal garden landscaping in Hampton?",
        answer:
          "Yes. Hampton gardens often benefit from hardy planting, mulching, tidy lawn areas and outdoor surfaces that suit coastal exposure and everyday use.",
      },
      {
        question: "Do you work on Hampton courtyards and townhouses?",
        answer:
          "Yes. We can help with compact courtyards, villa gardens and townhouse outdoor areas, including planting, paving, garden clean-ups and lawn alternatives where suitable.",
      },
      {
        question: "Can you upgrade outdoor entertaining areas in Hampton?",
        answer:
          "Yes. We can improve Hampton entertaining areas with paving, planting, turf, garden beds, retaining edges and layout changes that make the space easier to use.",
      },
    ],
  },
  {
    slug: "hampton-east",
    name: "Hampton East",
    region: "Bayside Melbourne",
    priority: "Nearby Bayside",
    postcode: "3188",
    localLandmark: "Boss James Reserve",
    propertyTypes: "post-war homes, villa units, new townhouses and family backyards",
    metaTitle: "Landscaping Hampton East | Greyline",
    metaDescription: "Landscaping Hampton East for garden maintenance, turf installation, lawn care, paving and retaining walls. Free quotes.",
    heroText:
      "Greyline Landscaping provides landscaping Hampton East homes need for garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades.",
    serviceAreaDescription:
      "Hampton East landscaping often improves compact yards, townhouse gardens, family lawns and practical outdoor zones close to Hampton and Brighton East.",
    nearbySuburbs: ["Hampton", "Brighton East", "Sandringham", "Bentleigh"],
    descriptions: {
      professional: [
        "Landscaping in Hampton East often has to make smaller or irregular outdoor spaces work harder. Post-war homes, villa units and newer townhouses may have narrow access, compact lawns or side yards that need clearer structure before the garden feels usable.",
        "Greyline Landscaping helps Hampton East homeowners with practical garden design, lawn preparation, planting, paving, retaining edges and garden clean-ups. The focus is a clean residential landscape that suits the property rather than a high-maintenance display garden.",
      ],
      maintenance: [
        "Garden maintenance in Hampton East can include lawn mowing, hedging, mulching, planting refreshes and clean-ups for tired beds or overgrown edges. Smaller gardens still need thoughtful maintenance, especially where shade, drainage or access make lawn care difficult.",
        "When Hampton East locals search for landscaping near me or garden maintenance near me, they often need a team that can advise on both upkeep and upgrades. Greyline can help decide whether the best next step is maintenance, turf installation, paving or a wider outdoor space upgrade.",
      ],
      construction: [
        "Turf installation in Hampton East is useful for patchy family lawns, compact backyards and new townhouse gardens that need a finished outdoor surface. We consider levels, soil preparation and edges so turf laying connects neatly with paths and garden beds.",
        "Paving and retaining walls in Hampton East can help with tight access, sloping edges and muddy walkways. A small paved path, retaining edge or garden bed restructure can make the whole yard feel more organised.",
      ],
      outdoor: [
        "Outdoor spaces in Hampton East should be easy to move through and simple to maintain. We help create better courtyard layouts, usable lawns, front yard landscaping, backyard landscaping and planting that softens hard surfaces around newer builds.",
        "Mulching, irrigation planning, hedging and planting choices can make a compact Hampton East garden feel greener without adding unnecessary maintenance.",
      ],
      why: [
        "Greyline Landscaping services Hampton East with a practical Bayside Melbourne approach, free quotes and clear communication. We look at access, drainage, materials and how the finished area will be used before recommending a scope.",
        "Choose Greyline if you need landscaping Hampton East support across garden maintenance, lawn care, turf installation, retaining walls, paving, planting and outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Hampton East"),
      sharedFaq.services("Hampton East"),
      {
        question: "Can you landscape small Hampton East courtyards?",
        answer:
          "Yes. We can help with compact Hampton East courtyards using planting, paving, mulching, garden clean-ups and layout improvements that keep the space practical.",
      },
      {
        question: "Do you offer lawn care and turf installation in Hampton East?",
        answer:
          "Yes. We provide lawn care advice and turf installation for Hampton East front yards, backyards and townhouse garden areas where new turf is suitable.",
      },
      {
        question: "Can you help with muddy paths or side access?",
        answer:
          "Yes. Paving, drainage planning, retaining edges and garden bed changes can all help improve muddy or awkward access areas.",
      },
    ],
  },
  {
    slug: "sandringham",
    name: "Sandringham",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3191",
    localLandmark: "Sandringham Beach",
    propertyTypes: "coastal homes, renovated family properties, townhouses and apartment courtyards",
    metaTitle: "Landscaping Sandringham | Greyline",
    metaDescription: "Landscaping Sandringham for coastal gardens, garden maintenance, lawn care, turf, paving and retaining walls.",
    heroText:
      "Greyline Landscaping provides landscaping Sandringham homeowners can trust for coastal gardens, garden maintenance, lawn care, turf installation, paving and retaining walls.",
    serviceAreaDescription:
      "Sandringham landscaping is shaped by coastal exposure, relaxed family living, compact courtyards and outdoor areas close to the bay.",
    nearbySuburbs: ["Hampton", "Black Rock", "Beaumaris", "Hampton East"],
    descriptions: {
      professional: [
        "Landscaping in Sandringham should respect the suburb's coastal character while creating outdoor areas that stay tidy through regular use. Beachside homes, townhouses and courtyards may need hardy planting, lawn preparation, paving and screening that can handle wind and sun.",
        "Greyline Landscaping helps Sandringham homeowners create practical residential landscapes with front yard landscaping, backyard landscaping, garden design, turf installation and planting that feels natural to Bayside Melbourne.",
      ],
      maintenance: [
        "Garden maintenance in Sandringham often involves managing coastal planting, hedging, lawn care, mulching and seasonal garden clean-ups. A neat maintenance plan can keep sandy, exposed or shaded areas from becoming patchy and difficult to use.",
        "For locals searching for landscaping near me or garden maintenance near me, Greyline provides a Bayside service area with practical advice for lawns, courtyards, outdoor entertaining spaces and garden beds.",
      ],
      construction: [
        "Turf installation in Sandringham can improve worn lawns and create cleaner family spaces when the ground is properly prepared. We look at drainage, levels, edges and how turf laying will meet paths, beds and paved areas.",
        "Paving and retaining walls in Sandringham are useful for managing access, level changes and entertaining areas. We plan these elements with planting and drainage in mind so the garden works as one finished space.",
      ],
      outdoor: [
        "Outdoor space upgrades in Sandringham can include coastal garden landscaping, lawn areas, paved entertaining zones, planting, irrigation considerations and clean garden edging. The result should feel relaxed, not overbuilt.",
        "We help Sandringham homeowners make courtyards, backyards and front gardens easier to use, easier to maintain and better suited to the local Bayside setting.",
      ],
      why: [
        "Greyline Landscaping is available across Sandringham for landscaping, garden design, garden maintenance, turf installation, lawn care, paving and retaining walls. We provide clear quotes and keep the project focused on practical outcomes.",
        "Choose Greyline for a local Bayside landscaper who understands coastal garden landscaping and residential outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Sandringham"),
      sharedFaq.services("Sandringham"),
      {
        question: "What plants suit Sandringham coastal gardens?",
        answer:
          "Plant selection depends on the exact site, but Sandringham gardens often benefit from hardy, lower-maintenance planting supported by mulching, irrigation planning and suitable lawn or paved areas.",
      },
      {
        question: "Can you improve a Sandringham courtyard?",
        answer:
          "Yes. We can upgrade courtyards with paving, planting, mulching, garden clean-ups, lawn alternatives and layout improvements.",
      },
      {
        question: "Do you build retaining walls in Sandringham?",
        answer:
          "Yes. We can quote retaining walls in Sandringham where site levels, garden beds or outdoor areas need better structure and drainage planning.",
      },
    ],
  },
  {
    slug: "elwood",
    name: "Elwood",
    region: "Bayside Melbourne",
    priority: "Nearby Bayside",
    postcode: "3184",
    localLandmark: "Elwood Canal",
    propertyTypes: "Edwardian homes, apartments, townhouses and compact courtyards",
    metaTitle: "Landscaping Elwood | Greyline Landscaping",
    metaDescription: "Landscaping Elwood for courtyards, garden maintenance, lawn care, planting, paving and outdoor space upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Elwood homes and courtyards need, including garden maintenance, lawn care, paving, planting and outdoor space upgrades.",
    serviceAreaDescription:
      "Elwood landscaping often focuses on compact courtyards, period homes, privacy planting, drainage and useful outdoor zones near the bay.",
    nearbySuburbs: ["Brighton", "Elsternwick", "Gardenvale", "Caulfield South"],
    descriptions: {
      professional: [
        "Landscaping in Elwood often means making compact, character-rich outdoor spaces feel calm and useful. Edwardian homes, apartments and townhouses may have tight access, shaded courtyards or older garden beds that need careful improvement rather than heavy-handed redesign.",
        "Greyline Landscaping helps Elwood homeowners with garden design, planting, paving, lawn care, garden clean-ups and outdoor upgrades that suit the suburb's established coastal character.",
      ],
      maintenance: [
        "Garden maintenance in Elwood can include hedging, mulching, lawn mowing, planting refreshes, clean-ups and pruning around small courtyards or front gardens. Because many sites are compact, maintenance needs to keep the space open and easy to move through.",
        "If you are looking for garden maintenance near me or landscaping near me in Elwood, Greyline can assess whether the garden needs routine care, better planting, paving repairs, drainage improvements or a more complete outdoor upgrade.",
      ],
      construction: [
        "Turf installation in Elwood is usually suited to small lawn areas, front yards or back courtyards where the conditions support it. We review shade, access and soil preparation before turf laying so the result is realistic.",
        "Paving in Elwood can make courtyards and side paths more usable, while retaining walls or raised edges can help structure planting in tight spaces. Each construction element should earn its place in a compact garden.",
      ],
      outdoor: [
        "Outdoor space upgrades in Elwood often focus on privacy, clean surfaces, planting and drainage. A small courtyard can feel much larger when paths, beds, lawn areas and seating zones are planned properly.",
        "We help with coastal garden landscaping, front yard landscaping, backyard landscaping, mulching, irrigation considerations and planting that suits Elwood's mix of period homes and modern renovations.",
      ],
      why: [
        "Greyline Landscaping services Elwood as part of our Bayside Melbourne service area, with free quotes and practical recommendations for residential landscapes. We do not invent a local office; we simply provide landscaping services in Elwood and nearby suburbs.",
        "Choose Greyline for landscaping Elwood projects that need a tidy finish, thoughtful planting and a realistic maintenance plan.",
      ],
    },
    faqs: [
      sharedFaq.quote("Elwood"),
      sharedFaq.services("Elwood"),
      {
        question: "Can you landscape small Elwood courtyards?",
        answer:
          "Yes. Elwood courtyards can be upgraded with planting, paving, mulching, garden clean-ups, drainage improvements and compact outdoor entertaining layouts.",
      },
      {
        question: "Do you work with period homes in Elwood?",
        answer:
          "Yes. We can plan front yard landscaping, paths, planting and garden beds that respect older homes while making the garden easier to maintain.",
      },
      {
        question: "Can drainage be improved in Elwood gardens?",
        answer:
          "Yes. Where wet or slow-draining areas affect lawns, beds or paving, drainage can be reviewed as part of the landscaping scope.",
      },
    ],
  },
  {
    slug: "elsternwick",
    name: "Elsternwick",
    region: "Bayside Melbourne",
    priority: "Nearby Bayside",
    postcode: "3185",
    localLandmark: "Glen Huntly Road",
    propertyTypes: "period homes, renovated semis, apartments and townhouse courtyards",
    metaTitle: "Landscaping Elsternwick | Greyline",
    metaDescription: "Landscaping Elsternwick for garden maintenance, lawn care, planting, turf installation, paving and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Elsternwick homeowners need for garden maintenance, lawn care, planting, turf installation, paving and outdoor upgrades.",
    serviceAreaDescription:
      "Elsternwick landscaping often improves period-home front gardens, courtyards, privacy planting, paths and tidy outdoor spaces close to Glen Huntly Road.",
    nearbySuburbs: ["Elwood", "Gardenvale", "Caulfield", "Caulfield South"],
    descriptions: {
      professional: [
        "Landscaping in Elsternwick needs to work with a dense mix of period homes, apartments, semis and newer townhouses. Front gardens often affect street presentation, while rear courtyards and backyards need careful planning to feel private and usable.",
        "Greyline Landscaping supports Elsternwick homes with landscape design, planting, turf installation, paving, garden clean-ups and lawn care. We focus on practical improvements that suit the property's scale and age.",
      ],
      maintenance: [
        "Garden maintenance in Elsternwick may involve reshaping older beds, trimming hedges, mulching, lawn mowing, planting refreshes and cleaning up overgrown areas. A well-maintained Elsternwick garden should look established without becoming difficult to manage.",
        "For homeowners searching for garden maintenance near me or landscaping near me, Greyline offers a local Bayside service area covering Elsternwick and nearby suburbs. We can help decide what to keep, what to remove and what to upgrade.",
      ],
      construction: [
        "Turf installation in Elsternwick can suit front yards, family lawns and courtyards where light and drainage are appropriate. Preparation and levels are important, especially around older paths, garden edges and existing trees.",
        "Paving and retaining walls in Elsternwick can improve access, define garden beds and make small outdoor spaces easier to use. These elements are planned alongside planting so the finished garden feels cohesive.",
      ],
      outdoor: [
        "Outdoor space upgrades in Elsternwick often focus on privacy, shade, neat paths and low-maintenance planting. We help with backyard landscaping, front yard landscaping, courtyard upgrades, mulching and irrigation considerations.",
        "The aim is a residential landscape that respects the home's character while providing practical lawns, pathways, planting and entertaining areas.",
      ],
      why: [
        "Greyline Landscaping services Elsternwick with clear quotes, local knowledge and a tidy finish. We understand that many Elsternwick gardens need careful improvements around existing architecture and limited access.",
        "Choose Greyline for landscaping Elsternwick projects across garden maintenance, lawn care, turf installation, paving, retaining walls, planting and garden clean-ups.",
      ],
    },
    faqs: [
      sharedFaq.quote("Elsternwick"),
      sharedFaq.services("Elsternwick"),
      {
        question: "Can you update an older Elsternwick front garden?",
        answer:
          "Yes. We can improve front gardens with planting, lawn care, paths, mulching, hedging and clean-ups that suit period and renovated homes.",
      },
      {
        question: "Do you landscape Elsternwick townhouse courtyards?",
        answer:
          "Yes. We can help townhouse courtyards with paving, planting, garden beds, drainage planning and outdoor space upgrades.",
      },
      {
        question: "Can you help with privacy planting in Elsternwick?",
        answer:
          "Yes. Planting can be planned to improve privacy, soften fences and make compact gardens feel more established.",
      },
    ],
  },
  {
    slug: "bentleigh",
    name: "Bentleigh",
    region: "Bayside Melbourne",
    priority: "Surrounding Suburbs",
    postcode: "3204",
    localLandmark: "Centre Road",
    propertyTypes: "family homes, renovated period houses, units and townhouse developments",
    metaTitle: "Landscaping Bentleigh | Greyline Landscaping",
    metaDescription: "Landscaping Bentleigh for garden maintenance, lawn care, turf installation, paving, retaining walls and planting.",
    heroText:
      "Greyline Landscaping provides landscaping Bentleigh homeowners can use for garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades.",
    serviceAreaDescription:
      "Bentleigh landscaping often supports family lawns, neat front gardens, townhouse outdoor areas and practical backyard upgrades.",
    nearbySuburbs: ["Bentleigh East", "Brighton East", "Caulfield South", "Gardenvale"],
    descriptions: {
      professional: [
        "Landscaping in Bentleigh often needs to serve busy family routines, renovated period homes and newer townhouse sites. A good garden should improve street appeal while making the back of the property more useful for children, pets, entertaining or quiet outdoor time.",
        "Greyline Landscaping helps Bentleigh homeowners with garden design, planting, lawn care, turf installation, paving, retaining walls and garden clean-ups. We plan landscaping services Bentleigh properties can maintain realistically.",
      ],
      maintenance: [
        "Garden maintenance in Bentleigh can include lawn mowing, hedging, mulching, pruning, planting refreshes and cleaning up tired or overgrown areas. Regular lawn care and garden bed maintenance can prevent small issues from becoming larger landscaping projects.",
        "For Bentleigh locals looking for a Bayside landscaper, landscaping near me or garden maintenance near me, Greyline provides practical advice across both maintenance and construction work.",
      ],
      construction: [
        "Turf installation in Bentleigh can transform patchy yards into cleaner, greener family spaces. We consider preparation, levels, edges and drainage before turf laying so the new lawn fits the wider landscape.",
        "Paving and retaining walls in Bentleigh can improve access, define outdoor entertaining areas and manage changes in level. These features work best when planned with planting, lawn and drainage from the start.",
      ],
      outdoor: [
        "Outdoor space upgrades in Bentleigh may include backyard landscaping, front yard landscaping, pathways, lawn areas, planting and practical entertaining zones. Townhouse gardens can also be made more useful with compact planting and clean paved surfaces.",
        "Greyline helps create residential landscapes that feel tidy, durable and suited to daily household use rather than purely decorative.",
      ],
      why: [
        "Choose Greyline Landscaping in Bentleigh for free quotes, clear communication and a practical approach to garden design and construction. We service Bentleigh as part of our Bayside Melbourne and surrounding-suburbs area.",
        "Our team can help with landscaping Bentleigh projects involving garden maintenance, turf installation, lawn care, paving, retaining walls, planting and outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Bentleigh"),
      sharedFaq.services("Bentleigh"),
      {
        question: "Can you landscape Bentleigh family backyards?",
        answer:
          "Yes. We can help with family backyard landscaping, including lawn areas, turf installation, planting, paving, retaining edges and outdoor entertaining upgrades.",
      },
      {
        question: "Do you provide lawn care in Bentleigh?",
        answer:
          "Yes. Lawn care in Bentleigh can include mowing, turf advice, lawn preparation, edging and recommendations for improving worn areas.",
      },
      {
        question: "Can you improve Bentleigh townhouse gardens?",
        answer:
          "Yes. We can improve townhouse gardens with planting, paving, mulching, garden clean-ups and compact outdoor layouts.",
      },
    ],
  },
  {
    slug: "bentleigh-east",
    name: "Bentleigh East",
    region: "Bayside Melbourne",
    priority: "Surrounding Suburbs",
    postcode: "3165",
    localLandmark: "Yarra Yarra Golf Club",
    propertyTypes: "large family homes, subdivided blocks, townhouses and renovated post-war houses",
    metaTitle: "Landscaping Bentleigh East | Greyline",
    metaDescription: "Landscaping Bentleigh East for garden maintenance, lawn care, turf, paving, retaining walls and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Bentleigh East homes need for garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades.",
    serviceAreaDescription:
      "Bentleigh East landscaping often improves larger family blocks, townhouse gardens, front yards and backyard zones that need clearer structure.",
    nearbySuburbs: ["Bentleigh", "Brighton East", "Hampton East", "Caulfield South"],
    descriptions: {
      professional: [
        "Landscaping in Bentleigh East often starts with structure. Larger family blocks, subdivided properties and new townhouses can all benefit from clearer lawn areas, better planting, improved paths and outdoor zones that suit how the property is used.",
        "Greyline Landscaping works across Bentleigh East on garden design, turf installation, lawn care, paving, retaining walls, planting and garden clean-ups. We aim for landscaping that looks finished and remains practical after handover.",
      ],
      maintenance: [
        "Garden maintenance in Bentleigh East may include lawn mowing, hedging, mulching, planting refreshes and clean-ups around established beds or newer townhouse landscaping. Maintenance keeps the garden tidy while identifying areas that need drainage, turf or paving work.",
        "If you have searched for landscaping near me or garden maintenance near me, Greyline can help with a realistic plan for your Bentleigh East front yard, backyard or courtyard.",
      ],
      construction: [
        "Turf installation in Bentleigh East is common for worn family lawns and new outdoor areas that need a clean green finish. Preparation, levels and drainage are considered before turf laying to support a better result.",
        "Paving and retaining walls in Bentleigh East can define outdoor entertaining spaces, manage level changes and improve side access. We plan construction around the broader landscape so paths, beds and lawns connect properly.",
      ],
      outdoor: [
        "Outdoor space upgrades in Bentleigh East can include backyard landscaping, front yard landscaping, planting, mulching, irrigation planning and lawn care. Newer builds often benefit from planting that softens fencing and hard surfaces.",
        "A successful Bentleigh East garden should be easy to navigate, simple to maintain and flexible enough for family life, entertaining and everyday outdoor use.",
      ],
      why: [
        "Greyline Landscaping services Bentleigh East with free quotes, practical advice and a clean finish. We understand that many projects involve both presentation and function, especially on family blocks and townhouse sites.",
        "Choose Greyline for landscaping Bentleigh East work across garden design, garden maintenance, turf installation, paving, retaining walls, planting and outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Bentleigh East"),
      sharedFaq.services("Bentleigh East"),
      {
        question: "Can you landscape larger Bentleigh East blocks?",
        answer:
          "Yes. We can help larger blocks with lawn areas, planting, paths, retaining walls, garden clean-ups and outdoor space upgrades.",
      },
      {
        question: "Do you provide turf installation in Bentleigh East?",
        answer:
          "Yes. Turf installation is available for Bentleigh East front yards, backyards and new garden areas where preparation and drainage are suitable.",
      },
      {
        question: "Can you improve townhouse landscaping in Bentleigh East?",
        answer:
          "Yes. Townhouse landscaping can include compact planting, paving, mulching, lawn care and practical garden layouts.",
      },
    ],
  },
  {
    slug: "caulfield",
    name: "Caulfield",
    region: "Bayside Melbourne",
    priority: "Surrounding Suburbs",
    postcode: "3162",
    localLandmark: "Caulfield Park and Caulfield Station",
    propertyTypes: "period homes, apartments, townhouses, renovated family houses and compact courtyards",
    metaTitle: "Landscaping Caulfield | Greyline Landscaping",
    metaDescription: "Landscaping Caulfield for garden maintenance, lawn care, turf installation, paving, planting and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Caulfield homes need for garden maintenance, lawn care, turf installation, paving, planting and outdoor space upgrades.",
    serviceAreaDescription:
      "Caulfield landscaping often supports period-home front gardens, apartments, courtyards, paths and practical green spaces.",
    nearbySuburbs: ["Caulfield South", "Elsternwick", "Gardenvale", "Bentleigh"],
    descriptions: {
      professional: [
        "Landscaping in Caulfield needs to work with a varied mix of homes, apartments, courtyards and renovated family properties. Some gardens need subtle front yard improvements, while others need a complete clean-up, new planting, lawn care or better paving.",
        "Greyline Landscaping provides Caulfield landscaping services that focus on practical residential outcomes. We can help with garden design, planting, turf installation, retaining walls, paving, mulching and outdoor upgrades suited to the block.",
      ],
      maintenance: [
        "Garden maintenance in Caulfield can include lawn mowing, hedging, garden clean-ups, mulching, planting refreshes and tidy edges around paths and lawns. Older gardens often benefit from a staged approach that keeps established features while removing what no longer works.",
        "For Caulfield homeowners searching for landscaping near me or garden maintenance near me, Greyline offers a local service area across Bayside Melbourne and nearby suburbs with clear quotes before work begins.",
      ],
      construction: [
        "Turf installation in Caulfield can suit small front lawns, family backyards and courtyard lawn areas where conditions allow. Preparation, drainage and access are considered before turf laying.",
        "Paving in Caulfield can improve movement between the home, side access and outdoor entertaining areas. Retaining walls or raised edges may help structure beds or manage level changes in older gardens.",
      ],
      outdoor: [
        "Outdoor space upgrades in Caulfield often focus on making compact areas feel organised, green and low-fuss. We help with front yard landscaping, backyard landscaping, planting, pathways, lawn care and garden clean-ups.",
        "The best Caulfield landscapes feel settled, tidy and practical, with materials and planting chosen for the property's character and the owner's maintenance expectations.",
      ],
      why: [
        "Greyline Landscaping services Caulfield with practical advice, free quotes and clean project finishing. We do not claim to have a separate Caulfield office; we provide landscaping services in Caulfield as part of our Bayside Melbourne service area.",
        "Choose Greyline for landscaping Caulfield projects involving garden maintenance, lawn care, turf installation, paving, retaining walls, planting and outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Caulfield"),
      sharedFaq.services("Caulfield"),
      {
        question: "Can you update older Caulfield gardens?",
        answer:
          "Yes. We can clean up, replant, mulch, improve lawns, add paths and upgrade outdoor areas while respecting established garden character.",
      },
      {
        question: "Do you work on Caulfield courtyards?",
        answer:
          "Yes. Courtyard work can include paving, planting, drainage planning, garden clean-ups and compact outdoor layouts.",
      },
      {
        question: "Can you help with front yard landscaping in Caulfield?",
        answer:
          "Yes. Front yard landscaping can include planting, paths, lawn care, mulching, edging and hedging to improve street presentation.",
      },
    ],
  },
  {
    slug: "caulfield-south",
    name: "Caulfield South",
    region: "Bayside Melbourne",
    priority: "Surrounding Suburbs",
    postcode: "3162",
    localLandmark: "Princes Park",
    propertyTypes: "period homes, renovated family houses, duplexes and townhouse gardens",
    metaTitle: "Landscaping Caulfield South | Greyline",
    metaDescription: "Landscaping Caulfield South for garden maintenance, lawn care, turf, paving, retaining walls and planting.",
    heroText:
      "Greyline Landscaping provides landscaping Caulfield South homeowners need for garden maintenance, lawn care, turf installation, paving, retaining walls and planting.",
    serviceAreaDescription:
      "Caulfield South landscaping often improves established front gardens, family backyards, townhouse gardens and outdoor areas near Princes Park.",
    nearbySuburbs: ["Caulfield", "Elsternwick", "Bentleigh", "Gardenvale"],
    descriptions: {
      professional: [
        "Landscaping in Caulfield South often needs to respect established homes while making outdoor spaces easier to use. Period properties, renovated houses, duplexes and townhouses may all need different answers for planting, lawn care, access and privacy.",
        "Greyline Landscaping helps Caulfield South homeowners with garden design, garden maintenance, turf installation, paving, retaining walls, planting and garden clean-ups. We aim for residential landscapes that feel settled and practical.",
      ],
      maintenance: [
        "Garden maintenance in Caulfield South can include hedging, mulching, lawn mowing, planting refreshes and clean-ups around older garden beds. Regular maintenance helps keep shade, leaf litter, worn lawns and overgrown boundaries under control.",
        "If you are searching for garden maintenance near me or landscaping near me, Greyline can provide a quote for Caulfield South properties and suggest the right mix of maintenance and upgrade work.",
      ],
      construction: [
        "Turf installation in Caulfield South can refresh worn family lawns and improve front yard presentation where the site suits new turf. We consider preparation, levels, drainage and edges before turf laying.",
        "Paving and retaining walls in Caulfield South can improve access, create cleaner outdoor entertaining areas and define garden beds. These elements are planned with the surrounding planting and lawn areas.",
      ],
      outdoor: [
        "Outdoor spaces designed for Caulfield South homes often need privacy, shade-friendly planting and practical pathways. We can help with backyard landscaping, front yard landscaping, planting, mulching and outdoor space upgrades.",
        "The goal is a garden that looks cared for without becoming difficult to maintain, whether the property is a family house, duplex or townhouse.",
      ],
      why: [
        "Greyline Landscaping services Caulfield South with free quotes, local Bayside knowledge and a clear process. We keep the focus on practical design, durable finishes and tidy handover.",
        "Choose Greyline for landscaping Caulfield South work involving garden maintenance, lawn care, turf installation, paving, retaining walls, planting and garden clean-ups.",
      ],
    },
    faqs: [
      sharedFaq.quote("Caulfield South"),
      sharedFaq.services("Caulfield South"),
      {
        question: "Can you improve Caulfield South family backyards?",
        answer:
          "Yes. We can help with backyard landscaping, turf, planting, paving, retaining edges, garden clean-ups and outdoor entertaining upgrades.",
      },
      {
        question: "Do you help with shade planting in Caulfield South?",
        answer:
          "Yes. Planting recommendations can account for shade, privacy, existing trees and maintenance expectations.",
      },
      {
        question: "Can you add paving to older Caulfield South gardens?",
        answer:
          "Yes. Paving can improve access, reduce muddy areas and connect the home to lawns, garden beds and outdoor entertaining zones.",
      },
    ],
  },
  {
    slug: "gardenvale",
    name: "Gardenvale",
    region: "Bayside Melbourne",
    priority: "Nearby Bayside",
    postcode: "3185",
    localLandmark: "Gardenvale Station",
    propertyTypes: "compact homes, period houses, villa gardens, courtyards and townhouses",
    metaTitle: "Landscaping Gardenvale | Greyline",
    metaDescription: "Landscaping Gardenvale for garden maintenance, lawn care, planting, turf installation, paving and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Gardenvale homes need for compact gardens, garden maintenance, lawn care, planting, paving and outdoor upgrades.",
    serviceAreaDescription:
      "Gardenvale landscaping often focuses on compact gardens, period-home street appeal, courtyards, paths and low-maintenance planting.",
    nearbySuburbs: ["Brighton", "Brighton East", "Elsternwick", "Caulfield South"],
    descriptions: {
      professional: [
        "Landscaping in Gardenvale often involves smaller outdoor spaces where every path, plant and lawn area matters. Period homes, villas, townhouses and compact courtyards need a careful balance between greenery, access and easy maintenance.",
        "Greyline Landscaping helps Gardenvale homeowners with garden design, planting, lawn care, turf installation, paving, mulching and garden clean-ups. We keep the layout practical so the garden does not feel crowded.",
      ],
      maintenance: [
        "Garden maintenance in Gardenvale can include hedge trimming, lawn mowing, mulching, planting refreshes and clean-ups in compact front or rear gardens. Small spaces show neglect quickly, so tidy edges and healthy planting make a noticeable difference.",
        "For Gardenvale locals looking for a Bayside landscaper, landscaping near me or garden maintenance near me, Greyline provides practical recommendations based on access, shade, drainage and the desired maintenance level.",
      ],
      construction: [
        "Turf installation in Gardenvale can suit small lawns where preparation, light and drainage are suitable. In some compact spaces, turf laying may be paired with paving and planting to create a balanced outdoor area.",
        "Paving and retaining edges in Gardenvale can improve access through narrow yards, side paths and courtyards. We plan these works with planting and garden beds so the result feels finished.",
      ],
      outdoor: [
        "Outdoor space upgrades in Gardenvale can turn small courtyards or tired front gardens into useful areas with better planting, cleaner paths, mulching and lawn care. Front yard landscaping can also improve street appeal without requiring a large garden.",
        "The best Gardenvale landscapes are simple, tidy and proportioned to the property, with planting and materials selected for long-term manageability.",
      ],
      why: [
        "Greyline Landscaping services Gardenvale as part of our Bayside Melbourne area, providing free quotes and clear project scopes. We understand the value of practical design in compact residential landscapes.",
        "Choose Greyline for landscaping Gardenvale projects across garden maintenance, lawn care, turf installation, paving, planting and outdoor upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Gardenvale"),
      sharedFaq.services("Gardenvale"),
      {
        question: "Can you landscape compact Gardenvale courtyards?",
        answer:
          "Yes. We can improve compact courtyards with planting, paving, mulching, garden clean-ups and layout changes that make the area easier to use.",
      },
      {
        question: "Do you provide lawn care in Gardenvale?",
        answer:
          "Yes. Lawn care can include mowing, edging, turf advice and preparation for small front yards or backyards.",
      },
      {
        question: "Can you improve street appeal for Gardenvale homes?",
        answer:
          "Yes. Front yard landscaping can include planting, paths, lawn care, hedging, mulching and garden bed clean-ups.",
      },
    ],
  },
  {
    slug: "black-rock",
    name: "Black Rock",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3193",
    localLandmark: "Black Rock Clock Tower",
    propertyTypes: "coastal family homes, elevated blocks, renovated houses and modern townhouses",
    metaTitle: "Landscaping Black Rock | Greyline",
    metaDescription: "Landscaping Black Rock for coastal gardens, garden maintenance, turf, paving, retaining walls and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Black Rock homeowners need for coastal gardens, garden maintenance, turf installation, paving, retaining walls and outdoor upgrades.",
    serviceAreaDescription:
      "Black Rock landscaping often includes coastal planting, level changes, retaining walls, family lawns and outdoor entertaining areas.",
    nearbySuburbs: ["Beaumaris", "Sandringham", "Hampton", "Brighton"],
    descriptions: {
      professional: [
        "Landscaping in Black Rock often needs to handle coastal exposure, established trees and changing levels. Homes near the village, elevated blocks and newer townhouses can all benefit from stronger garden structure, durable paving and planting that suits Bayside conditions.",
        "Greyline Landscaping helps Black Rock homeowners with garden design, turf installation, lawn care, paving, retaining walls, planting and garden clean-ups. We focus on practical coastal garden landscaping rather than overworked designs.",
      ],
      maintenance: [
        "Garden maintenance in Black Rock may include lawn care, hedging, mulching, planting refreshes and seasonal clean-ups after wind or heavy weather. Coastal gardens need maintenance that supports plant health and keeps outdoor areas tidy.",
        "If your search was for landscaping near me or garden maintenance near me, Greyline services Black Rock and nearby Bayside suburbs with clear quotes for maintenance, turf, paving and larger outdoor upgrades.",
      ],
      construction: [
        "Turf installation in Black Rock can create usable family lawn areas where the site is prepared correctly. We review soil, levels and drainage before turf laying so lawns connect cleanly with surrounding beds and paths.",
        "Retaining walls in Black Rock are often important where level changes affect garden use. Paving can then connect outdoor entertaining areas, side access and lawn zones in a more practical way.",
      ],
      outdoor: [
        "Outdoor space upgrades in Black Rock can include coastal planting, retaining walls, pathways, paved entertaining areas, front yard landscaping and backyard landscaping. These elements need to suit sun, wind and the shape of the block.",
        "Greyline helps create residential landscapes that feel calm, durable and appropriate for Black Rock homes, from compact courtyards to larger family gardens.",
      ],
      why: [
        "Choose Greyline Landscaping in Black Rock for local Bayside knowledge, free quotes and practical advice on coastal garden landscaping. We service Black Rock as part of our Bayside Melbourne service area.",
        "Our team can help with landscaping Black Rock projects involving garden maintenance, turf installation, lawn care, retaining walls, paving, planting and outdoor space upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Black Rock"),
      sharedFaq.services("Black Rock"),
      {
        question: "Can you build retaining walls in Black Rock?",
        answer:
          "Yes. We can quote retaining walls in Black Rock where level changes, garden beds or outdoor areas need better support and drainage planning.",
      },
      {
        question: "Do Black Rock gardens need coastal planting?",
        answer:
          "Many do. Planting should be chosen around exposure, sun, wind, soil and the maintenance level you want.",
      },
      {
        question: "Can you upgrade Black Rock entertaining areas?",
        answer:
          "Yes. We can help with paving, planting, lawn areas, retaining edges and garden clean-ups to improve outdoor entertaining spaces.",
      },
    ],
  },
  {
    slug: "beaumaris",
    name: "Beaumaris",
    region: "Bayside Melbourne",
    priority: "Core Bayside",
    postcode: "3193",
    localLandmark: "Ricketts Point",
    propertyTypes: "large family homes, mid-century houses, coastal blocks and renovated properties",
    metaTitle: "Landscaping Beaumaris | Greyline",
    metaDescription: "Landscaping Beaumaris for coastal gardens, lawn care, turf installation, paving, retaining walls and outdoor upgrades.",
    heroText:
      "Greyline Landscaping provides landscaping Beaumaris homeowners can rely on for coastal gardens, garden maintenance, lawn care, turf installation, paving and retaining walls.",
    serviceAreaDescription:
      "Beaumaris landscaping often supports larger family blocks, coastal planting, established trees, retaining walls and outdoor entertaining areas.",
    nearbySuburbs: ["Black Rock", "Sandringham", "Hampton", "Brighton"],
    descriptions: {
      professional: [
        "Landscaping in Beaumaris often involves larger blocks, mature trees and coastal conditions. A successful garden needs strong structure, practical lawn areas, planting that suits the setting and outdoor zones that work for family life.",
        "Greyline Landscaping helps Beaumaris homeowners with garden design, turf installation, lawn care, paving, retaining walls, planting, mulching and garden clean-ups. We plan landscaping services Beaumaris properties can use and maintain over time.",
      ],
      maintenance: [
        "Garden maintenance in Beaumaris may include lawn mowing, hedging, mulching, planting refreshes and seasonal clean-ups around larger gardens. Mature trees and coastal exposure can create ongoing maintenance needs that should be managed with a practical plan.",
        "For homeowners searching for landscaping near me or garden maintenance near me, Greyline provides a local Bayside service area and clear advice on whether the garden needs maintenance, replanting, turf, paving or a broader outdoor upgrade.",
      ],
      construction: [
        "Turf installation in Beaumaris can create generous lawn areas for family use when the site is prepared properly. We consider levels, soil condition, edges and drainage before turf laying.",
        "Paving and retaining walls in Beaumaris can help manage larger outdoor areas, level changes and entertaining zones. Retaining may support garden beds or slopes, while paving connects the home, lawn and outdoor living areas.",
      ],
      outdoor: [
        "Outdoor space upgrades in Beaumaris often include backyard landscaping, front yard landscaping, coastal garden landscaping, planting, pathways and outdoor entertaining areas. The best results feel natural to the block rather than overly formal.",
        "Greyline helps create residential landscapes that balance lawn, planting, shade, access and maintenance so the property feels easier to enjoy.",
      ],
      why: [
        "Choose Greyline Landscaping in Beaumaris for free quotes, practical Bayside knowledge and a tidy project finish. We service Beaumaris and surrounding suburbs without claiming a separate local office.",
        "Our team can help with landscaping Beaumaris projects across garden design, garden maintenance, turf installation, lawn care, paving, retaining walls, planting and outdoor space upgrades.",
      ],
    },
    faqs: [
      sharedFaq.quote("Beaumaris"),
      sharedFaq.services("Beaumaris"),
      {
        question: "Can you landscape larger Beaumaris family blocks?",
        answer:
          "Yes. We can help larger blocks with lawn areas, planting, pathways, retaining walls, paving and outdoor entertaining upgrades.",
      },
      {
        question: "Do you provide coastal garden landscaping in Beaumaris?",
        answer:
          "Yes. We consider exposure, mature trees, soil, sun and maintenance when recommending planting and garden structure.",
      },
      {
        question: "Can you install turf in Beaumaris?",
        answer:
          "Yes. Turf installation is available for Beaumaris front yards, backyards and family lawn areas where preparation and site conditions are suitable.",
      },
    ],
  },
];

export function getSuburbBySlug(slug: string) {
  return suburbs.find((suburb) => suburb.slug === slug);
}

export function getSuburbByName(name: string) {
  return suburbs.find((suburb) => suburb.name === name);
}

export function getSuburbHref(name: string) {
  const suburb = getSuburbByName(name);
  return suburb ? `/landscaping-${suburb.slug}/` : "#";
}

export const suburbsByPriority = suburbs.reduce<Record<Suburb["priority"], Suburb[]>>(
  (groups, suburb) => {
    groups[suburb.priority].push(suburb);
    return groups;
  },
  {
    "Core Bayside": [],
    "Nearby Bayside": [],
    "Surrounding Suburbs": [],
  },
);
