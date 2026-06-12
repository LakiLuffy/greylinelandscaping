import Link from "next/link";
import { phone, phoneHref } from "@/data/services";

export function SiteHeader({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const navClassName = isDark ? "text-white/86" : "text-[#2B2B2B]";
  const logoSrc = "/images/logo-full.png";

  return (
    <header className={`relative z-10 ${isDark ? "text-white" : "bg-white text-[#2B2B2B] shadow-sm"}`}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img className="h-11 w-auto" src={logoSrc} alt="Greyline Landscaping Brighton" />
        </Link>
        <nav className={`hidden items-center gap-6 text-sm font-bold uppercase tracking-[0.08em] lg:flex ${navClassName}`} aria-label="Primary navigation">
          <Link href="/services/">Services</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="#contact-form">Contact</Link>
        </nav>
        <a className="rounded-[4px] bg-[#9D5324] px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-[#85461f]" href={phoneHref}>
          Call {phone}
        </a>
        <nav className={`grid w-full grid-cols-3 gap-2 text-center text-xs font-black uppercase tracking-[0.06em] sm:grid-cols-5 lg:hidden ${navClassName}`} aria-label="Mobile navigation">
          <Link className="rounded-[4px] border border-current/25 px-2 py-2" href="/services/">
            Services
          </Link>
          <Link className="rounded-[4px] border border-current/25 px-2 py-2" href="/#portfolio">
            Portfolio
          </Link>
          <Link className="rounded-[4px] border border-current/25 px-2 py-2" href="/#process">
            Process
          </Link>
          <Link className="rounded-[4px] border border-current/25 px-2 py-2" href="/#reviews">
            Reviews
          </Link>
          <Link className="rounded-[4px] border border-current/25 px-2 py-2" href="#contact-form">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
