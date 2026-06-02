import type { Suburb } from "@/data/suburbs";

export function HeroSection({ suburb }: { suburb: Suburb }) {
  return (
    <section className="relative overflow-hidden bg-[#2D2D2D] px-5 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(74,124,89,0.58),transparent_30%),linear-gradient(135deg,#2D2D2D_0%,#3f5637_55%,#2D2D2D_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#c9d7bf]">{suburb.postcode} VIC</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Landscaper in {suburb.name} | Greyline Landscaping
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/88 sm:text-xl">
          Professional landscaping services in {suburb.name} and the {suburb.region} area
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-md bg-[#4A7C59] px-6 py-3 text-center font900 font-bold uppercase text-white hover:bg-[#3f6d4c]" href="#contact-form">
            Get a Free Quote
          </a>
          <a className="rounded-md border border-white/70 px-6 py-3 text-center font-bold uppercase text-white hover:bg-white/10" href="tel:0468247861">
            Call Now - 0468 247 861
          </a>
        </div>
      </div>
    </section>
  );
}
