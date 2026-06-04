"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm({ suburbName, nearbySuburbs }: { suburbName: string; nearbySuburbs: string[] }) {
  const [status, setStatus] = useState("Your details are used only to respond to your landscaping enquiry.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("Sending your enquiry...");
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus("Thanks. Your quote request has been received.");
      form.reset();
    } else {
      setStatus("Sorry, the form could not be sent. Please call 0468 247 861.");
    }
  }

  return (
    <section className="bg-[#3f5637] px-5 py-16 pb-28 text-white" id="contact-form">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Ready To Get Your Yard Sorted?</h2>
          <p className="mt-4 text-lg text-white/86">Tell us what needs fixing and we&apos;ll help you take the next step.</p>
          <p className="mt-5 text-white/86">Prefer to talk? Call us directly.</p>
          <a className="mt-3 inline-flex text-2xl font-black text-white underline underline-offset-4" href="tel:0468247861">
            0468 247 861
          </a>
          <p className="mt-6 text-sm leading-6 text-white/78">
            Servicing {suburbName}, {nearbySuburbs[0]}, {nearbySuburbs[1]}, and surrounding suburbs.
          </p>
        </div>
        <form className="grid gap-4 rounded-lg bg-white p-5 text-[#2D2D2D] shadow-xl sm:grid-cols-2" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-bold">
            Name
            <input className="rounded-md border border-[#d6ded1] px-3 py-3" name="name" required type="text" autoComplete="name" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Phone
            <input className="rounded-md border border-[#d6ded1] px-3 py-3" name="phone" required type="tel" autoComplete="tel" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Email
            <input className="rounded-md border border-[#d6ded1] px-3 py-3" name="email" type="email" autoComplete="email" />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Suburb
            <input className="rounded-md border border-[#d6ded1] px-3 py-3" name="suburb" defaultValue={suburbName} required type="text" autoComplete="address-level2" />
          </label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">
            Service Needed
            <select className="rounded-md border border-[#d6ded1] bg-white px-3 py-3" name="service">
              <option>Garden Makeover</option>
              <option>Garden Design</option>
              <option>Garden Design & Construction</option>
              <option>Turf Installation</option>
              <option>Retaining Walls</option>
              <option>Paving</option>
              <option>Decking</option>
              <option>Drainage Solutions</option>
              <option>Not Sure Yet</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold sm:col-span-2">
            Message / Project Details
            <textarea className="min-h-32 rounded-md border border-[#d6ded1] px-3 py-3" name="message" rows={5} />
          </label>
          <button className="rounded-md bg-[#4A7C59] px-5 py-3 font-black uppercase text-white hover:bg-[#3f6d4c] sm:col-span-2" type="submit">
            Request a Free Quote
          </button>
          <p className="text-sm text-[#606060] sm:col-span-2" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
