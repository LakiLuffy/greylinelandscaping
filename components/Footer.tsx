import Link from "next/link";
import { suburbsByPriority } from "@/data/suburbs";

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] px-5 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Link className="text-2xl font-black" href="/">
            Greyline Landscaping
          </Link>
          <p className="mt-3 text-sm leading-6 text-white/72">Professional landscaping across Brighton, Bayside and surrounding suburbs.</p>
          <p className="mt-4 text-sm">
            Phone:{" "}
            <a className="font-bold underline underline-offset-4" href="tel:0468247861">
              0468 247 861
            </a>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {Object.entries(suburbsByPriority).map(([group, suburbs]) => (
            <div key={group}>
              <h2 className="text-sm font-black uppercase tracking-[0.12em] text-[#c9d7bf]">{group}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/78">
                {suburbs.map((suburb) => (
                  <li key={suburb.slug}>
                    <Link className="hover:text-white" href={`/landscaper-${suburb.slug}`}>
                      {suburb.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/14 pt-5 text-sm text-white/58">
        <p>Copyright {new Date().getFullYear()} Greyline Landscaping. All rights reserved.</p>
        <p className="mt-3 text-xs leading-5 text-white/45">
          Greyline Landscaping Brighton, 197 Bay St, Brighton VIC 3186. Phone:{" "}
          <a className="underline underline-offset-4" href="tel:0468247861">
            0468 247 861
          </a>
        </p>
      </div>
    </footer>
  );
}
