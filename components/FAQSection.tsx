import type { FAQ } from "@/lib/schema";

export function FAQSection({ suburbName, faqs }: { suburbName: string; faqs: FAQ[] }) {
  return (
    <section className="bg-[#f4f7f1] px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-black text-[#2D2D2D] sm:text-4xl">Frequently Asked Questions - Landscaping in {suburbName}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <article className="rounded-lg border border-[#dce5d7] bg-white p-6" key={faq.question}>
              <h3 className="text-lg font-bold text-[#2D2D2D]">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f5f5f]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
