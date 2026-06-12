import { BadgeCheck, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { title: "Free No-Obligation Quotes", icon: ClipboardCheck, text: "Clear scope and pricing before work begins, with no pressure to proceed." },
  { title: "Experienced Local Team", icon: BadgeCheck, text: "Local landscaping knowledge for Bayside homes, townhouses and family blocks." },
  { title: "Clean, Tidy Workmanship", icon: Sparkles, text: "We keep the site organised during the job and leave a clean finish behind." },
  { title: "Fully Insured", icon: ShieldCheck, text: "Professional, insured work for residential landscaping projects." },
];

export function WhyChooseUs({ suburbName }: { suburbName: string }) {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-black text-[#2D2D2D] sm:text-4xl">Why {suburbName} Locals Choose Greyline Landscaping</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="rounded-lg border border-[#e0e5dc] p-6 text-center" key={feature.title}>
                <Icon className="mx-auto h-9 w-9 text-[#4A7C59]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-[#2D2D2D]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#606060]">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
