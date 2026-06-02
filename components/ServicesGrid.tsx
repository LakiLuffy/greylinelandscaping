import { Flower2, Hammer, Layers3, Leaf, Ruler, Scissors, Shovel, Sprout, Trees, Waves } from "lucide-react";

const serviceCopy: Record<string, { description: string; icon: typeof Leaf }> = {
  "Garden Design & Planting": {
    icon: Sprout,
    description: "Practical garden layouts, plant selection and planting plans suited to the local soil, sun and maintenance level. We create gardens that look established without becoming hard to manage.",
  },
  "Turf Installation": {
    icon: Leaf,
    description: "Fresh lawn preparation and turf installation using options such as Sir Walter, Kikuyu and Palmetto where suitable. We focus on base preparation, edges and drainage so the new lawn has the best start.",
  },
  "Retaining Walls": {
    icon: Layers3,
    description: "Timber, concrete sleeper and stone retaining wall solutions for level changes, garden structure and usable yard space. We consider drainage, access and finish before recommending an option.",
  },
  "Paving & Pathways": {
    icon: Ruler,
    description: "Clean paths, paved areas and access routes that connect the garden with the home. Paving can improve drainage, reduce mud and make outdoor areas easier to use year-round.",
  },
  Decking: {
    icon: Hammer,
    description: "Timber and composite decking for outdoor living zones, entrances and garden transitions. We build decks that feel connected to the rest of the landscape rather than added on later.",
  },
  "Garden Bed Installation & Mulching": {
    icon: Shovel,
    description: "New garden beds, edging, soil improvement and mulching for cleaner presentation and healthier planting. This is a strong option for tired front gardens and low-maintenance upgrades.",
  },
  "Hedge & Tree Planting": {
    icon: Trees,
    description: "Hedge, screening and tree planting to add privacy, shade and structure. We choose planting that suits the site, available space and long-term maintenance expectations.",
  },
  "Full Backyard Renovations": {
    icon: Flower2,
    description: "Complete yard transformations covering turf, planting, paving, retaining, drainage and outdoor living areas. We plan the sequence properly so the finished space feels cohesive.",
  },
  "Garden Maintenance": {
    icon: Scissors,
    description: "Ongoing and one-off maintenance for gardens that need pruning, tidy-ups, mulching and seasonal care. Maintenance keeps established landscapes looking clean between larger upgrades.",
  },
  "Drainage Solutions": {
    icon: Waves,
    description: "Drainage improvements for wet, muddy or slow-draining areas that affect lawns, paving and garden beds. Better drainage supports the whole landscape and protects finished surfaces.",
  },
};

export function ServicesGrid({ suburbName, services }: { suburbName: string; services: string[] }) {
  return (
    <section className="bg-[#f4f7f1] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-black text-[#2D2D2D] sm:text-4xl">Our Landscaping Services in {suburbName}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const item = serviceCopy[service];
            const Icon = item.icon;

            return (
              <article className="rounded-lg border border-[#dce5d7] bg-white p-6 shadow-sm" key={service}>
                <Icon className="h-9 w-9 text-[#4A7C59]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-[#2D2D2D]">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b5b5b]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
