import { Flower2, Hammer, Layers3, Leaf, Ruler, Scissors, Shovel, Sparkles, Sprout, Trees, Waves } from "lucide-react";

const serviceCopy: Record<string, { description: string; icon: typeof Leaf }> = {
  "Garden Makeovers": {
    icon: Flower2,
    description: "Practical garden refreshes for tired beds, patchy lawns and underused corners. Makeovers can include turf, planting, mulching, edging, paving touch-ups and clean finishing.",
  },
  "Garden Design": {
    icon: Sprout,
    description: "Practical garden layouts covering planting, lawn areas, outdoor zones, access, materials, drainage and project scope before work begins.",
  },
  "Garden Design & Construction": {
    icon: Hammer,
    description: "Complete garden planning and build work for outdoor spaces that need turf, retaining, paving, decking, planting, drainage and a clean finish.",
  },
  "Turf Installation": {
    icon: Leaf,
    description: "Fresh lawn preparation and turf installation for greener, more usable front yards and backyards. We focus on preparation, levels, edges and drainage concerns.",
  },
  "Retaining Walls": {
    icon: Layers3,
    description: "Retaining solutions for level changes, soil support, garden structure and outdoor areas that need better support.",
  },
  Paving: {
    icon: Ruler,
    description: "Clean paths, paved areas and access routes that connect the garden with the home. Paving can improve drainage, reduce mud and make outdoor areas easier to use year-round.",
  },
  Decking: {
    icon: Hammer,
    description: "Decking for outdoor living zones, entrances, entertaining areas and garden transitions that connect the home and yard.",
  },
  "Drainage Solutions": {
    icon: Waves,
    description: "Drainage improvements for wet, muddy or slow-draining areas that affect lawns, paving and garden beds. Better drainage supports the whole landscape.",
  },
  Planting: {
    icon: Trees,
    description: "Planting included in makeovers, garden design and construction projects to add structure, greenery and a more finished garden feel.",
  },
  Mulching: {
    icon: Shovel,
    description: "Mulching for cleaner garden beds, healthier planting and a neater finish after garden upgrades.",
  },
  Edging: {
    icon: Scissors,
    description: "Edging that creates cleaner lines between lawn, garden beds, paths and paved areas.",
  },
  "Clean Project Finishing": {
    icon: Sparkles,
    description: "A tidy handover at the end of the job, with a clear finish when the team leaves.",
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
