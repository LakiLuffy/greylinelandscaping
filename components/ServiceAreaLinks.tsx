import Link from "next/link";
import type { Suburb } from "@/data/suburbs";

export function ServiceAreaLinks({ suburbs }: { suburbs: Suburb[] }) {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">Local suburbs</p>
          <h2 className="mt-3 text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping Service Areas</h2>
          <p className="mt-5 text-lg leading-8 text-[#555]">
            Greyline Landscaping services Brighton and nearby Bayside suburbs with landscaping, garden maintenance, lawn care, turf installation, paving, retaining walls and outdoor upgrades.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suburbs.map((suburb) => (
            <Link className="group border-l-4 border-[#B79B55] bg-[#EEF2EA] p-6 transition hover:-translate-y-1" href={`/landscaping-${suburb.slug}/`} key={suburb.slug}>
              <h3 className="text-xl font-black text-[#2B2B2B]">Landscaping {suburb.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#606060]">{suburb.serviceAreaDescription}</p>
              <span className="mt-5 inline-flex text-sm font-black uppercase text-[#1F6B3A] group-hover:underline">View suburb page</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
