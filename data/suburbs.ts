export type Suburb = {
  slug: string;
  name: string;
  region: "Bayside";
  priority: "Inner Bayside" | "Mid Bayside" | "Outer Ring";
  nearbySuburbs: string[];
  postcode: string;
  description: string[];
  services: string[];
  localLandmark: string;
  propertyTypes: string;
};

export const allServices = [
  "Garden Makeovers",
  "Garden Design",
  "Garden Design & Construction",
  "Turf Installation",
  "Retaining Walls",
  "Paving",
  "Decking",
  "Drainage Solutions",
  "Planting",
  "Mulching",
  "Edging",
  "Clean Project Finishing",
] as const;

export const suburbs: Suburb[] = [
  {
    slug: "brighton-east",
    name: "Brighton East",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3187",
    localLandmark: "Dendy Park",
    propertyTypes: "renovated family homes, period houses, townhouses and larger backyard blocks",
    nearbySuburbs: ["Hampton", "Hampton East", "Bentleigh", "Elsternwick"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Decking", "Drainage Solutions", "Full Backyard Renovations"],
    description: [
      "Brighton East has a practical mix of established family blocks, renovated period homes and newer townhouses, so landscaping needs to balance street appeal with usable outdoor space. Greyline Landscaping works across Brighton East and Bayside on gardens that need better structure, drainage, planting and entertaining areas.",
      "Whether your property is close to Dendy Park or tucked into a quieter residential street, Brighton East yards often benefit from layered planting, clean lawn areas and paving that can handle daily family use. We shape Brighton East landscapes around how the home is actually lived in, from low-maintenance front gardens to complete backyard renovations.",
    ],
  },
  {
    slug: "hampton",
    name: "Hampton",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3188",
    localLandmark: "Hampton Street",
    propertyTypes: "period homes, renovated family homes, coastal townhouses and compact villa gardens",
    nearbySuburbs: ["Sandringham", "Brighton East", "Hampton East", "Black Rock"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Decking", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Garden Maintenance"],
    description: [
      "Hampton homes range from character-filled period houses to modern coastal townhouses, and each needs a garden that feels tidy without fighting the bayside conditions. Greyline Landscaping helps Hampton homeowners create practical Bayside landscapes with fresh turf, planting, decking, paving and garden beds that suit the property.",
      "From homes near Hampton Street to quieter pockets toward the beach, Hampton gardens often need salt-tolerant planting, smart screening and outdoor areas that stay easy to maintain. We design and build Hampton landscaping that lifts presentation while keeping day-to-day upkeep realistic.",
    ],
  },
  {
    slug: "hampton-east",
    name: "Hampton East",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3188",
    localLandmark: "Boss James Reserve",
    propertyTypes: "post-war homes, villa units, new townhouses and family backyards",
    nearbySuburbs: ["Hampton", "Brighton East", "Highett", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Garden Bed Installation & Mulching", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Hampton East has many family homes, villa units and townhouse developments where outdoor areas need to work harder in less space. Greyline Landscaping supports Hampton East and the wider Bayside area with compact garden design, turf installation, paving, retaining edges and drainage improvements.",
      "Whether you are near Boss James Reserve or upgrading a rear courtyard off a busy local road, Hampton East landscaping should feel clean, durable and easy to use. We help Hampton East owners turn tired lawns and awkward side yards into practical gardens with better planting, paths and structure.",
    ],
  },
  {
    slug: "sandringham",
    name: "Sandringham",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3191",
    localLandmark: "Sandringham Beach",
    propertyTypes: "coastal homes, renovated family properties, townhouses and apartment courtyards",
    nearbySuburbs: ["Hampton", "Black Rock", "Highett", "Beaumaris"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Decking", "Hedge & Tree Planting", "Garden Maintenance", "Drainage Solutions"],
    description: [
      "Sandringham landscaping needs to respect the relaxed coastal character while still standing up to exposed Bayside conditions. Greyline Landscaping works with Sandringham homeowners on planting, turf, paving and decks that suit beachside homes, townhouses and compact courtyards.",
      "Near Sandringham Beach and through the surrounding residential streets, gardens often need hardy planting, neat screening and outdoor surfaces that stay clean after wet weather. We build Sandringham landscapes that feel polished, practical and suited to the suburb's bayside lifestyle.",
    ],
  },
  {
    slug: "black-rock",
    name: "Black Rock",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3193",
    localLandmark: "Black Rock Clock Tower",
    propertyTypes: "coastal family homes, elevated blocks, renovated houses and modern townhouses",
    nearbySuburbs: ["Beaumaris", "Sandringham", "Hampton", "Cheltenham"],
    services: ["Garden Design & Planting", "Retaining Walls", "Paving & Pathways", "Decking", "Hedge & Tree Planting", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Black Rock properties often have a coastal edge, established trees and level changes that call for careful landscape planning. Greyline Landscaping helps Black Rock and Bayside homeowners with retaining walls, paving, planting and outdoor living areas that suit both older homes and newer builds.",
      "From gardens near the Black Rock Clock Tower to elevated residential blocks, Black Rock landscaping should handle wind, sun and changing levels without looking overworked. We create Black Rock gardens with strong structure, durable materials and planting that complements the home.",
    ],
  },
  {
    slug: "elwood",
    name: "Elwood",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3184",
    localLandmark: "Elwood Canal",
    propertyTypes: "Edwardian homes, apartments, townhouses and compact courtyards",
    nearbySuburbs: ["Elsternwick", "Brighton East", "Hampton", "Caulfield South"],
    services: ["Garden Design & Planting", "Paving & Pathways", "Decking", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Garden Maintenance", "Drainage Solutions"],
    description: [
      "Elwood gardens are often compact, character-rich and close to apartments, period homes or renovated terraces, so every square metre matters. Greyline Landscaping brings practical Bayside landscaping to Elwood with planting, paving, drainage and courtyard upgrades designed for tight access and high-use outdoor spaces.",
      "Whether your home is near Elwood Canal or in a leafy street closer to the beach, Elwood landscaping needs to manage shade, drainage and privacy without feeling crowded. We help Elwood owners create neat, usable gardens that match the suburb's established coastal character.",
    ],
  },
  {
    slug: "elsternwick",
    name: "Elsternwick",
    region: "Bayside",
    priority: "Inner Bayside",
    postcode: "3185",
    localLandmark: "Glen Huntly Road",
    propertyTypes: "period homes, renovated semis, apartments and townhouse courtyards",
    nearbySuburbs: ["Elwood", "Caulfield South", "Carnegie", "Brighton East"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Full Backyard Renovations", "Garden Maintenance"],
    description: [
      "Elsternwick has a dense mix of period homes, apartments and newer townhouses, making thoughtful landscaping especially important. Greyline Landscaping works in Elsternwick and nearby Bayside suburbs on front garden refreshes, courtyard planting, turf, paving and practical garden makeovers.",
      "Around Glen Huntly Road and the surrounding residential streets, Elsternwick yards often need tidy presentation, privacy planting and materials that work with older architecture. We shape Elsternwick landscapes so they feel established, usable and easy to keep looking clean.",
    ],
  },
  {
    slug: "beaumaris",
    name: "Beaumaris",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3193",
    localLandmark: "Ricketts Point",
    propertyTypes: "large family homes, mid-century houses, coastal blocks and renovated properties",
    nearbySuburbs: ["Black Rock", "Cheltenham", "Mentone", "Sandringham"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Decking", "Hedge & Tree Planting", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Beaumaris offers larger blocks, established trees and coastal family homes where landscaping can make a major difference to daily outdoor living. Greyline Landscaping helps Beaumaris and Bayside clients with full backyard renovations, turf, retaining walls, planting, paving and drainage.",
      "From homes near Ricketts Point to quiet streets with mature canopies, Beaumaris landscaping needs a calm, natural finish that still functions well. We create Beaumaris gardens with strong structure, hardy planting and usable lawn or entertaining areas for family life.",
    ],
  },
  {
    slug: "bentleigh",
    name: "Bentleigh",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3204",
    localLandmark: "Centre Road",
    propertyTypes: "family homes, renovated period houses, units and townhouse developments",
    nearbySuburbs: ["Bentleigh East", "McKinnon", "Brighton East", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Full Backyard Renovations", "Garden Maintenance"],
    description: [
      "Bentleigh gardens need to serve busy family homes, renovated period properties and newer townhouse sites with equal practicality. Greyline Landscaping provides Bentleigh and Bayside landscaping for turf, planting, paving, garden beds and backyard makeovers that improve everyday use.",
      "Whether you are near Centre Road or in a quieter residential pocket, Bentleigh landscaping often needs clean front presentation and a back garden that can handle children, pets and entertaining. We build Bentleigh outdoor spaces with a tidy finish and a clear plan before work begins.",
    ],
  },
  {
    slug: "bentleigh-east",
    name: "Bentleigh East",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3165",
    localLandmark: "Yarra Yarra Golf Club",
    propertyTypes: "large family homes, subdivided blocks, townhouses and renovated post-war houses",
    nearbySuburbs: ["Bentleigh", "Carnegie", "McKinnon", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Garden Bed Installation & Mulching", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Bentleigh East has everything from large family blocks to newer townhouse developments, so landscaping often needs to solve both presentation and layout. Greyline Landscaping helps Bentleigh East homeowners with Bayside garden design, turf, retaining walls, paving and drainage improvements.",
      "Around Yarra Yarra Golf Club and through the suburb's residential streets, Bentleigh East gardens can benefit from clearer zones, better lawn preparation and planting that softens newer builds. We deliver Bentleigh East landscaping that is clean, practical and built around how the space will be used.",
    ],
  },
  {
    slug: "highett",
    name: "Highett",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3190",
    localLandmark: "Highett Road",
    propertyTypes: "townhouses, family homes, units and renovated brick houses",
    nearbySuburbs: ["Hampton East", "Sandringham", "Cheltenham", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Decking", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Drainage Solutions"],
    description: [
      "Highett's mix of family homes, units and newer townhouses calls for landscaping that is neat, efficient and easy to maintain. Greyline Landscaping works across Highett and Bayside on turf, paving, decking, planting and drainage projects that make compact yards more usable.",
      "Near Highett Road and the surrounding residential pockets, Highett outdoor spaces often need smart privacy planting, clean paths and garden beds that do not overtake the site. We create Highett landscaping with a practical layout, durable finishes and a tidy handover.",
    ],
  },
  {
    slug: "cheltenham",
    name: "Cheltenham",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3192",
    localLandmark: "Southland",
    propertyTypes: "family homes, older brick houses, units, townhouses and larger backyards",
    nearbySuburbs: ["Highett", "Beaumaris", "Mentone", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Decking", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Cheltenham properties often have generous backyards, older brick homes or newer townhouse layouts that need practical outdoor upgrades. Greyline Landscaping helps Cheltenham and Bayside clients with turf, retaining walls, paving, decking, planting and full backyard renovations.",
      "Whether your property is near Southland or in a quieter family street, Cheltenham landscaping can improve drainage, access and outdoor living quickly. We build Cheltenham gardens with clear zones for lawn, planting, paths and entertaining so the space feels easier to use.",
    ],
  },
  {
    slug: "moorabbin",
    name: "Moorabbin",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3189",
    localLandmark: "Moorabbin Reserve",
    propertyTypes: "brick family homes, units, warehouses with yards and townhouse sites",
    nearbySuburbs: ["Hampton East", "Highett", "Bentleigh", "Cheltenham"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Garden Bed Installation & Mulching", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Moorabbin landscaping is often about making hardworking spaces cleaner, greener and easier to manage. Greyline Landscaping supports Moorabbin and Bayside properties with turf, planting, retaining walls, paving, garden beds and drainage solutions for homes and mixed-use sites.",
      "Around Moorabbin Reserve and the surrounding residential streets, Moorabbin yards can range from family backyards to compact unit gardens. We help Moorabbin owners turn uneven, tired or poorly draining areas into structured landscapes with a practical finish.",
    ],
  },
  {
    slug: "mentone",
    name: "Mentone",
    region: "Bayside",
    priority: "Mid Bayside",
    postcode: "3194",
    localLandmark: "Mentone Beach",
    propertyTypes: "coastal homes, family blocks, townhouses and renovated older houses",
    nearbySuburbs: ["Parkdale", "Beaumaris", "Cheltenham", "Mordialloc"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Decking", "Hedge & Tree Planting", "Garden Maintenance", "Drainage Solutions"],
    description: [
      "Mentone has a relaxed coastal feel with family homes, townhouses and older properties that benefit from hardy, well-planned landscaping. Greyline Landscaping delivers Mentone and Bayside garden design, turf, paving, decking, planting and maintenance support.",
      "Near Mentone Beach and through the suburb's leafy streets, Mentone gardens need to stay tidy while handling sun, wind and busy household use. We create Mentone landscaping with practical planting, clean edges and outdoor areas that feel ready to enjoy.",
    ],
  },
  {
    slug: "parkdale",
    name: "Parkdale",
    region: "Bayside",
    priority: "Outer Ring",
    postcode: "3195",
    localLandmark: "Parkdale Beach",
    propertyTypes: "coastal family homes, townhouses, villas and renovated brick houses",
    nearbySuburbs: ["Mentone", "Mordialloc", "Cheltenham", "Beaumaris"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Decking", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Drainage Solutions"],
    description: [
      "Parkdale gardens often need to combine coastal durability with a warm family feel. Greyline Landscaping helps Parkdale homeowners across the Bayside area with turf, planting, paving, decking and garden bed upgrades for homes, villas and townhouses.",
      "From properties near Parkdale Beach to quieter streets inland, Parkdale landscaping should be low-fuss, attractive and practical through changing weather. We build Parkdale outdoor spaces with clear access, hardy plants and finishes that suit everyday use.",
    ],
  },
  {
    slug: "mordialloc",
    name: "Mordialloc",
    region: "Bayside",
    priority: "Outer Ring",
    postcode: "3195",
    localLandmark: "Mordialloc Creek",
    propertyTypes: "coastal homes, family blocks, townhouses and older renovated properties",
    nearbySuburbs: ["Parkdale", "Mentone", "Cheltenham", "Beaumaris"],
    services: ["Garden Design & Planting", "Turf Installation", "Retaining Walls", "Paving & Pathways", "Decking", "Full Backyard Renovations", "Drainage Solutions"],
    description: [
      "Mordialloc outdoor spaces often need to manage coastal exposure, drainage and family use without becoming high-maintenance. Greyline Landscaping works in Mordialloc and the Bayside area on turf, retaining walls, paving, decking, planting and backyard renovations.",
      "Near Mordialloc Creek and around the suburb's residential streets, Mordialloc landscaping can transform patchy lawns or tired gardens into cleaner, more useful areas. We plan Mordialloc gardens around practical access, durable materials and planting that suits the local setting.",
    ],
  },
  {
    slug: "caulfield-south",
    name: "Caulfield South",
    region: "Bayside",
    priority: "Outer Ring",
    postcode: "3162",
    localLandmark: "Princes Park",
    propertyTypes: "period homes, renovated family houses, duplexes and townhouse gardens",
    nearbySuburbs: ["Elsternwick", "Carnegie", "Bentleigh", "Brighton East"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Full Backyard Renovations", "Garden Maintenance"],
    description: [
      "Caulfield South has many established homes and renovated family properties where the garden needs to respect older architecture while feeling fresh. Greyline Landscaping supports Caulfield South and nearby Bayside suburbs with planting, turf, paving, garden beds and backyard makeovers.",
      "Whether you are near Princes Park or in a quiet residential street, Caulfield South landscaping often needs privacy, shade-friendly planting and clean front presentation. We help Caulfield South homeowners create outdoor spaces that feel established, tidy and practical.",
    ],
  },
  {
    slug: "carnegie",
    name: "Carnegie",
    region: "Bayside",
    priority: "Outer Ring",
    postcode: "3163",
    localLandmark: "Koornang Road",
    propertyTypes: "townhouses, apartments, period homes and compact family gardens",
    nearbySuburbs: ["Caulfield South", "Bentleigh East", "McKinnon", "Bentleigh"],
    services: ["Garden Design & Planting", "Paving & Pathways", "Decking", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Garden Maintenance", "Drainage Solutions"],
    description: [
      "Carnegie landscaping often focuses on compact spaces, townhouse courtyards and older homes that need a cleaner outdoor layout. Greyline Landscaping works in Carnegie and nearby Bayside areas on planting, paving, decking, drainage and garden maintenance that make small yards work better.",
      "Around Koornang Road and the surrounding residential streets, Carnegie gardens can benefit from privacy planting, smart paths and low-maintenance beds. We design Carnegie landscapes that feel calm and useful without crowding the property.",
    ],
  },
  {
    slug: "mckinnon",
    name: "McKinnon",
    region: "Bayside",
    priority: "Outer Ring",
    postcode: "3204",
    localLandmark: "McKinnon Reserve",
    propertyTypes: "family homes, renovated period houses, townhouses and neat villa gardens",
    nearbySuburbs: ["Bentleigh", "Carnegie", "Bentleigh East", "Moorabbin"],
    services: ["Garden Design & Planting", "Turf Installation", "Paving & Pathways", "Garden Bed Installation & Mulching", "Hedge & Tree Planting", "Full Backyard Renovations", "Garden Maintenance"],
    description: [
      "McKinnon homes often have well-kept streetscapes, family gardens and newer townhouses where a tidy landscape adds real value. Greyline Landscaping helps McKinnon and Bayside homeowners with turf, planting, paving, garden beds and complete backyard renovations.",
      "From properties near McKinnon Reserve to quieter school-zone streets, McKinnon landscaping should feel neat, durable and family-friendly. We create McKinnon gardens with strong front presentation, practical lawn areas and planting that stays manageable.",
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
  return suburb ? `/landscaper-${suburb.slug}/` : "#";
}

export const suburbsByPriority = suburbs.reduce<Record<Suburb["priority"], Suburb[]>>(
  (groups, suburb) => {
    groups[suburb.priority].push(suburb);
    return groups;
  },
  {
    "Inner Bayside": [],
    "Mid Bayside": [],
    "Outer Ring": [],
  },
);
