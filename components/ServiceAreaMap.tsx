const googleMyMapsEmbed =
  "https://www.google.com/maps/d/u/0/embed?mid=12in7F_JDJhI_I4VP7w-JlGYT9EgOkTw&ehbc=2E312F";

export function ServiceAreaMap() {
  return (
    <section className="bg-[#EEF2EA] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#4A7C59]">Bayside Melbourne</p>
        <h2 className="mt-3 text-3xl font-black text-[#2B2B2B] sm:text-4xl">Landscaping and Garden Maintenance Areas We Service</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#555]">
          Use the map below to view common areas serviced by Greyline Landscaping across Brighton and surrounding Bayside Melbourne suburbs.
        </p>
        <div className="mt-8 w-full overflow-hidden rounded-[4px] bg-white shadow-xl">
          <iframe
            src={googleMyMapsEmbed}
            title="Greyline Landscaping Brighton service areas map"
            width="100%"
            height="500"
            className="block h-[350px] w-full border-0 md:h-[500px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
