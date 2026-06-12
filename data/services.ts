import type { FAQ } from "@/lib/schema";

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  intro: string[];
  image: string;
  imageAlt: string;
  includedTitle: string;
  included: string[];
  process: { title: string; text: string }[];
  related: string[];
  faqs: FAQ[];
  finalCta: string;
};

export const phone = "0468 247 861";
export const phoneHref = "tel:0468247861";

export const trustSignals = ["5-Star Rated", "Fully Insured", "Free Quotes", "Local Team"];

export const sellingPoints = [
  "Clear quotes before work starts",
  "Updates while the job is underway",
  "Clean finish when the team leaves",
  "Local Brighton & Bayside team",
  "Fully insured",
  "Free quotes",
];

export const serviceArea =
  "Greyline Landscaping Brighton services Brighton, Brighton East, Hampton, Beaumaris, Sandringham, Bayside and surrounding suburbs.";

export const serviceAreaSuburbs = [
  "Brighton East",
  "Hampton",
  "Hampton East",
  "Sandringham",
  "Black Rock",
  "Elwood",
  "Elsternwick",
  "Beaumaris",
  "Bentleigh",
  "Bentleigh East",
  "Highett",
  "Cheltenham",
  "Moorabbin",
  "Mentone",
  "Parkdale",
  "Mordialloc",
  "Caulfield South",
  "Carnegie",
  "McKinnon",
];

export const supportingServices = [
  {
    title: "Planting",
    text: "Planting is included naturally in garden makeovers, garden design and garden design and construction projects.",
    href: "/garden-design-brighton/",
  },
  {
    title: "Mulching",
    text: "Mulching helps garden beds look cleaner and supports healthier planting after a makeover or new build.",
    href: "/garden-makeovers-brighton/",
  },
  {
    title: "Edging",
    text: "Edging creates a neater line between lawns, beds, paths and paved areas.",
    href: "/garden-makeovers-brighton/",
  },
  {
    title: "Clean Project Finishing",
    text: "Greyline keeps projects clear from quote to clean finish, with a tidy site when the team leaves.",
    href: "/services/",
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "garden-makeovers-brighton",
    title: "Garden Makeovers",
    h1: "Garden Makeovers Brighton",
    metaTitle: "Garden Makeovers Brighton | Greyline Landscaping",
    metaDescription: "Garden makeovers in Brighton and Bayside for tired beds, patchy lawns, planting, mulching, edging and cleaner outdoor spaces. Free local quotes today.",
    heroText: "Transform tired garden beds, patchy lawns and underused outdoor corners into a cleaner, greener space for your Brighton or Bayside home.",
    image: "/images/Landscaping-Doncaster-qzywoxb5ytdktmpgz1qfnj6s7wlbpo1m4dk0m514x4.jpg",
    imageAlt: "Paving and garden makeover with new planting by Greyline Landscaping Brighton",
    intro: [
      "A good garden makeover does not need to overcomplicate the yard. Greyline Landscaping Brighton helps homeowners clean up tired areas, improve lawn presentation and make outdoor spaces easier to use.",
      "Your makeover can include turf, planting, mulching, edging, paving touch-ups, garden clean-up and drainage improvements where needed. The focus is a practical result with clear quoting, updates while we work and a clean project finish.",
    ],
    includedTitle: "What is included in a garden makeover?",
    included: ["Tired garden bed refreshes", "Patchy lawn and turf upgrades", "Planting, mulching and edging", "Paving touch-ups and access improvements", "Drainage checks for wet or muddy areas", "Clean project finishing before handover"],
    process: [
      { title: "Consult", text: "We look at the tired, messy or underused parts of the yard and discuss what needs to change." },
      { title: "Plan", text: "We map out turf, planting, edging, drainage or paving work so the makeover has a clear scope." },
      { title: "Build", text: "The team completes the upgrade with updates while the job is underway." },
      { title: "Clean Finish", text: "We leave the garden cleaner, greener and ready to use." },
    ],
    related: ["turf-installation-brighton", "paving-brighton", "drainage-solutions-brighton"],
    faqs: [
      { question: "Can you refresh a tired backyard without a full rebuild?", answer: "Yes. Many Brighton garden makeovers focus on cleaning up beds, improving lawn areas, adding mulch and edging, and fixing the parts that make the yard hard to use." },
      { question: "Can planting and mulching be included?", answer: "Yes. Planting, mulching and edging are commonly included in garden makeovers where they suit the site and project scope." },
      { question: "Do you help with patchy lawn during a makeover?", answer: "Yes. We can discuss turf preparation and installation as part of the makeover if the lawn is worn, patchy or difficult to use." },
      { question: "Do you offer free garden makeover quotes?", answer: `Yes. Call Greyline Landscaping Brighton on ${phone} or send an enquiry for a free quote.` },
    ],
    finalCta: "Need a garden makeover in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "garden-design-brighton",
    title: "Garden Design",
    h1: "Garden Design Brighton",
    metaTitle: "Garden Design Brighton | Greyline Landscaping",
    metaDescription: "Practical garden design in Brighton and Bayside for lawns, planting, access, materials, drainage and project scope. Request a free local quote today.",
    heroText: "Practical garden design for Brighton and Bayside homes, planned around layout, access, lawn areas, planting, materials and drainage.",
    image: "/images/eHd1XncRnvOwLjCmvPisz1MpaglnYjT3z4qKoCGc.jpg",
    imageAlt: "Raised garden beds and backyard planting planned by Greyline Landscaping Brighton",
    intro: [
      "Garden design gives the project a clear direction before work begins. Greyline Landscaping Brighton plans outdoor spaces around how the yard is used, what needs fixing and what will stay manageable over time.",
      "We consider planting, lawn areas, outdoor zones, access, materials, drainage, retaining needs and project scope so your Brighton or Bayside garden can be quoted and built with fewer surprises.",
    ],
    includedTitle: "What is included in garden design?",
    included: ["Layout planning for outdoor zones", "Planting and lawn area recommendations", "Access, path and paving planning", "Drainage and retaining needs review", "Material and project scope guidance", "Clear next steps before work begins"],
    process: [
      { title: "Consult", text: "We discuss how you want the garden to work and what problems need solving." },
      { title: "Design", text: "We shape a practical plan covering layout, planting, lawn, access and materials." },
      { title: "Plan The Build", text: "We define the project scope so quoting and construction are clearer." },
      { title: "Clean Finish", text: "If Greyline completes the work, the same focus on tidy finishing carries through." },
    ],
    related: ["garden-design-construction-brighton", "retaining-walls-brighton", "paving-brighton", "decking-brighton"],
    faqs: [
      { question: "What does garden design help with?", answer: "It helps clarify the layout, planting, lawn areas, access, drainage, materials and construction scope before work begins." },
      { question: "Can the design include retaining or drainage needs?", answer: "Yes. We can consider retaining and drainage needs during planning so they are not treated as afterthoughts." },
      { question: "Is garden design useful for smaller Brighton yards?", answer: "Yes. Smaller yards often benefit from clearer zones, smarter planting and better access planning." },
      { question: "Can Greyline build the design as well?", answer: "Yes. Greyline offers garden design and construction where the project needs to move from plan to completed outdoor space." },
    ],
    finalCta: "Need garden design in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "garden-design-construction-brighton",
    title: "Garden Design & Construction",
    h1: "Garden Design & Construction Brighton",
    metaTitle: "Garden Design & Construction Brighton | Greyline Landscaping",
    metaDescription: "Garden design and construction in Brighton and Bayside for turf, paving, decking, retaining, drainage, planting and clean finishes. Free local quotes.",
    heroText: "From layout through to the build, Greyline creates practical Brighton and Bayside outdoor spaces with clear scope and a clean finish.",
    image: "/images/greyline-instagram-work.png",
    imageAlt: "Completed Greyline Landscaping Brighton garden design and construction work",
    intro: [
      "Garden design and construction is for yards that need more than one small fix. Greyline Landscaping Brighton can take an outdoor space from planning through to completed work with one clear process.",
      "Projects may include turf, retaining walls, paving, decking, planting, drainage, mulching, edging and clean project finishing. The goal is a cohesive yard that looks finished and works for everyday use.",
    ],
    includedTitle: "What can be included in design and construction?",
    included: ["Practical garden layout planning", "Turf, planting, mulching and edging", "Retaining wall and level-change solutions", "Paving and decking for usable areas", "Drainage improvements where required", "Clean finish and tidy handover"],
    process: [
      { title: "Consult", text: "We inspect the yard, access and priorities so the project starts with the right scope." },
      { title: "Design / Plan", text: "We plan the layout, materials, turf, planting, drainage and construction sequence." },
      { title: "Build / Install", text: "Greyline completes the agreed work with updates while the job is underway." },
      { title: "Clean Finish", text: "We tidy the site and leave the completed outdoor area ready to enjoy." },
    ],
    related: ["turf-installation-brighton", "retaining-walls-brighton", "paving-brighton", "decking-brighton", "drainage-solutions-brighton"],
    faqs: [
      { question: "Can one project include turf, paving and planting?", answer: "Yes. Garden design and construction projects can combine turf, paving, planting, retaining, drainage, mulching and edging where they suit the site." },
      { question: "Do you quote before construction starts?", answer: "Yes. Greyline provides clear quotes before work starts so the scope is understood." },
      { question: "Can you work with awkward access?", answer: "Access is reviewed during consultation and planning so the build approach suits the property." },
      { question: "Do you clean up at the end?", answer: "Yes. Clean project finishing is part of Greyline's process and a key reason homeowners choose the team." },
    ],
    finalCta: "Need garden design and construction in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "turf-installation-brighton",
    title: "Turf Installation",
    h1: "Turf Installation Brighton",
    metaTitle: "Turf Installation Brighton | Greyline Landscaping",
    metaDescription: "Turf installation in Brighton and Bayside for patchy lawns, front yards and backyards, with soil preparation, levelling and clean finishing. Free quotes.",
    heroText: "Lawn preparation and turf installation for greener, more usable front yards and backyards across Brighton and Bayside.",
    image: "/images/After-10.jpg",
    imageAlt: "Fresh turf and garden edging installed by Greyline Landscaping Brighton",
    intro: [
      "Patchy, worn or muddy lawn areas can make the whole yard feel unfinished. Greyline Landscaping Brighton prepares and installs turf so your outdoor space looks cleaner and becomes easier to use.",
      "We look at old lawn condition, soil preparation, levelling, edges and drainage concerns before installation. That preparation helps the new lawn sit neatly within the wider garden.",
    ],
    includedTitle: "What is included in turf installation?",
    included: ["Old or patchy lawn area review", "Soil preparation and levelling", "Turf installation for front and back yards", "Garden edge and access coordination", "Drainage considerations for soggy areas", "Clean finish after installation"],
    process: [
      { title: "Consult", text: "We check the lawn area, access and any drainage concerns." },
      { title: "Prepare", text: "The area is prepared and levelled so the turf has a cleaner base." },
      { title: "Install", text: "Turf is installed neatly around edges, beds and usable yard zones." },
      { title: "Clean Finish", text: "We leave the area tidy so the new lawn presents well from day one." },
    ],
    related: ["garden-makeovers-brighton", "drainage-solutions-brighton"],
    faqs: [
      { question: "Can you replace a patchy lawn?", answer: "Yes. We can discuss turf installation for patchy or worn lawn areas in Brighton and Bayside homes." },
      { question: "Do you prepare the soil before laying turf?", answer: "Yes. Soil preparation and levelling are important parts of a clean turf installation." },
      { question: "Can drainage issues affect turf?", answer: "Yes. Wet or slow-draining areas can affect lawn performance, so drainage concerns should be reviewed before or during turf work." },
      { question: "Do you install turf in front yards and backyards?", answer: "Yes. Greyline can quote turf installation for front yards, backyards and usable lawn areas." },
    ],
    finalCta: "Need turf installation in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "retaining-walls-brighton",
    title: "Retaining Walls",
    h1: "Retaining Walls Brighton",
    metaTitle: "Retaining Walls Brighton | Greyline Landscaping",
    metaDescription: "Retaining wall solutions in Brighton and Bayside for level changes, soil support, garden structure and cleaner outdoor areas. Free local quotes today.",
    heroText: "Retaining solutions for level changes, soil support, garden structure and outdoor areas that need better support in Brighton and Bayside.",
    image: "/images/multi-tier-concrete-sleeper-terracing.png",
    imageAlt: "Tiered retaining wall landscaping by Greyline Landscaping Brighton",
    intro: [
      "Retaining walls can help make a sloping or uneven yard feel more structured and usable. Greyline Landscaping Brighton provides retaining solutions for garden level changes, soil support and cleaner outdoor layouts.",
      "We consider the site levels, access, drainage needs and the way the retaining wall connects with paths, paving, planting and the rest of the garden.",
    ],
    includedTitle: "What is included with retaining wall work?",
    included: ["Level-change and soil support review", "Retaining solution planning", "Access and drainage considerations", "Integration with garden beds and paving", "Clear quote before work starts", "Clean finish around the completed area"],
    process: [
      { title: "Consult", text: "We inspect the level change, soil support needs and access." },
      { title: "Plan", text: "We consider drainage, layout and how the wall fits with the rest of the garden." },
      { title: "Build", text: "The retaining solution is completed to the agreed scope." },
      { title: "Clean Finish", text: "The surrounding area is tidied so the garden feels complete." },
    ],
    related: ["garden-design-construction-brighton", "paving-brighton"],
    faqs: [
      { question: "When does a garden need a retaining wall?", answer: "A retaining wall may help where there are level changes, soil movement, garden beds needing structure or outdoor areas that need better support." },
      { question: "Can retaining walls be planned with paving?", answer: "Yes. Retaining and paving often need to be planned together so access and finished levels make sense." },
      { question: "Do you assess drainage around retaining areas?", answer: "Yes. Drainage considerations are part of planning retaining solutions." },
      { question: "Do you provide free retaining wall quotes?", answer: `Yes. Call ${phone} or send an enquiry for a free quote.` },
    ],
    finalCta: "Need retaining walls in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "paving-brighton",
    title: "Paving",
    h1: "Paving Brighton",
    metaTitle: "Paving Brighton | Greyline Landscaping",
    metaDescription: "Paving in Brighton and Bayside for paths, access, outdoor areas, reduced mud and cleaner garden connections. Contact Greyline for a free quote today.",
    heroText: "Paths and paved areas that reduce mud, improve garden access and connect the home to the yard across Brighton and Bayside.",
    image: "/images/Landscaping-Doncaster-qzywoxb5ytdktmpgz1qfnj6s7wlbpo1m4dk0m514x4.jpg",
    imageAlt: "Paved garden area and planting completed by Greyline Landscaping Brighton",
    intro: [
      "Good paving helps the garden work in everyday weather. Greyline Landscaping Brighton creates paths and paved areas that improve access, reduce muddy sections and make the outdoor area feel more connected.",
      "Paving can support garden makeovers, retaining wall projects, decking transitions and outdoor entertaining areas where a neat, practical finish matters.",
    ],
    includedTitle: "What paving can help with",
    included: ["Garden paths and access routes", "Paved outdoor areas", "Reducing muddy or worn sections", "Connecting the home to the yard", "Paving around beds, lawns and decks", "Neat finishing and site tidy-up"],
    process: [
      { title: "Consult", text: "We review where access, mud or outdoor use needs improvement." },
      { title: "Plan", text: "We plan the paved area around garden levels, retaining, drainage and daily use." },
      { title: "Install", text: "The paving work is completed to the agreed scope." },
      { title: "Clean Finish", text: "Edges and surrounding areas are left tidy for a finished look." },
    ],
    related: ["garden-makeovers-brighton", "retaining-walls-brighton", "decking-brighton"],
    faqs: [
      { question: "Can paving reduce muddy garden areas?", answer: "Yes. Paving can improve access and reduce worn or muddy areas when planned with the rest of the yard." },
      { question: "Can paving be included in a garden makeover?", answer: "Yes. Paving touch-ups or new paved areas can be included where they suit the makeover scope." },
      { question: "Do you plan paving with retaining walls?", answer: "Yes. Paving and retaining levels should be considered together for a cleaner result." },
      { question: "Do you offer free paving quotes?", answer: `Yes. Contact Greyline Landscaping Brighton on ${phone} for a free quote.` },
    ],
    finalCta: "Need paving in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "decking-brighton",
    title: "Decking",
    h1: "Decking Brighton",
    metaTitle: "Decking Brighton | Greyline Landscaping",
    metaDescription: "Decking in Brighton and Bayside for outdoor living zones, entrances, entertaining areas and stronger connections between home and yard. Free quotes.",
    heroText: "Decking for outdoor living zones, entrances and entertaining areas that create a stronger connection between the home and yard.",
    image: "/images/WhatsApp-Image-2025-06-27-at-16.49.43_685fd646.jpg",
    imageAlt: "Finished outdoor decking and garden upgrade by Greyline Landscaping Brighton",
    intro: [
      "Decking can turn an awkward transition or underused corner into a more useful outdoor zone. Greyline Landscaping Brighton builds decking as part of practical garden upgrades and outdoor living projects.",
      "We plan decking around access, entrances, entertaining areas, garden levels and how the new space connects back to paving, planting and the rest of the yard.",
    ],
    includedTitle: "What decking can support",
    included: ["Outdoor living and entertaining zones", "Entrances and garden transitions", "Connection between home and yard", "Integration with paving and planting", "Planning around access and levels", "Clean finish around the completed deck"],
    process: [
      { title: "Consult", text: "We discuss where decking can improve access, outdoor use or the connection to the home." },
      { title: "Plan", text: "We consider levels, surrounding paving, planting and project scope." },
      { title: "Build", text: "The decking area is completed with updates while the job is underway." },
      { title: "Clean Finish", text: "We leave the finished area tidy and ready to use." },
    ],
    related: ["garden-design-construction-brighton", "paving-brighton"],
    faqs: [
      { question: "Can decking be part of a larger garden project?", answer: "Yes. Decking can be included with garden design and construction, paving, planting and other landscaping work." },
      { question: "Where does decking work best?", answer: "Decking can work well for outdoor living zones, entrances, entertaining areas and transitions between the home and yard." },
      { question: "Do you plan the surrounding garden too?", answer: "Yes. Greyline can consider paving, planting, access and levels so the deck fits the wider space." },
      { question: "Do you provide free decking quotes?", answer: `Yes. Call ${phone} or request a quote online.` },
    ],
    finalCta: "Need decking in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
  {
    slug: "drainage-solutions-brighton",
    title: "Drainage Solutions",
    h1: "Drainage Solutions Brighton",
    metaTitle: "Drainage Solutions Brighton | Greyline Landscaping",
    metaDescription: "Drainage solutions in Brighton and Bayside for wet, muddy or slow-draining yards, soggy lawns, garden beds and more usable outdoor areas. Free quotes.",
    heroText: "Drainage improvements for wet, muddy or slow-draining areas that stop your Brighton or Bayside yard working properly.",
    image: "/images/AdobeStock_491701637.webp",
    imageAlt: "Lawn preparation and drainage planning for a residential yard by Greyline Landscaping Brighton",
    intro: [
      "Pooling water, soggy lawn sections and slow-draining garden beds can make a yard hard to use. Greyline Landscaping Brighton helps plan drainage improvements as part of practical landscaping work.",
      "Drainage solutions can support turf installation, garden makeovers, paving and garden bed upgrades so finished areas stay cleaner and more usable.",
    ],
    includedTitle: "What drainage work can help with",
    included: ["Wet or muddy yard areas", "Slow-draining lawn sections", "Garden bed drainage concerns", "Drainage planning before turf installation", "Paving and access areas affected by water", "Cleaner, more usable outdoor spaces"],
    process: [
      { title: "Consult", text: "We identify pooling, soggy or slow-draining areas and how they affect the yard." },
      { title: "Plan", text: "We consider drainage alongside turf, garden beds, paving and site levels." },
      { title: "Improve", text: "Drainage improvements are completed to suit the agreed landscaping scope." },
      { title: "Clean Finish", text: "The area is tidied so the outdoor space is easier to use." },
    ],
    related: ["turf-installation-brighton", "garden-makeovers-brighton"],
    faqs: [
      { question: "Can drainage help a soggy lawn?", answer: "Yes. Drainage planning can help address wet or slow-draining lawn areas before or during turf work." },
      { question: "Can drainage be included in a garden makeover?", answer: "Yes. If wet or muddy areas are affecting the yard, drainage can be considered as part of the makeover scope." },
      { question: "Do you help with pooling water?", answer: "Yes. Greyline can review pooling water and suggest practical drainage improvements for the landscaping project." },
      { question: "Do you offer free drainage quotes?", answer: `Yes. Call Greyline Landscaping Brighton on ${phone} or request a free quote online.` },
    ],
    finalCta: "Need drainage solutions in Brighton? Contact Greyline Landscaping Brighton for a free quote.",
  },
];

export const servicePageMap = Object.fromEntries(servicePages.map((service) => [service.slug, service])) as Record<string, ServicePage>;

export function serviceUrl(slug: string) {
  return `/${slug}/`;
}
