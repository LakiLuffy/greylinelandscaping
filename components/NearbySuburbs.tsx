import Link from "next/link";
import { getSuburbHref } from "@/data/suburbs";

export function NearbySuburbs({ suburbName, nearbySuburbs }: { suburbName: string; nearbySuburbs: string[] }) {
  return (
    <section className="bg-[#2D2D2D] px-5 py-14 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black">Also Servicing Near {suburbName}</h2>
        <p className="mt-5 text-white/82">
          We also provide landscaping services in{" "}
          {nearbySuburbs.map((nearby, index) => (
            <span key={nearby}>
              <Link className="font-bold text-[#c9d7bf] underline underline-offset-4" href={getSuburbHref(nearby)}>
                {nearby}
              </Link>
              {index === nearbySuburbs.length - 2 ? ", and " : index < nearbySuburbs.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
