"use client";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/20 bg-[#2D2D2D] p-3 shadow-2xl md:hidden">
      <a className="rounded-md bg-white px-3 py-3 text-center text-sm font-black uppercase text-[#2D2D2D]" href="tel:0468247861">
        Call Now
      </a>
      <a className="rounded-md bg-[#4A7C59] px-3 py-3 text-center text-sm font-black uppercase text-white" href="#contact-form">
        Get Quote
      </a>
    </div>
  );
}
