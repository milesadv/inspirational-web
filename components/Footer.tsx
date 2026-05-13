import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest px-6 py-14 text-parchment">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold">{site.name}</h2>
          <p className="mt-4 text-sm leading-6 text-parchment/75">Stories to help readers walk with wisdom, courage, justice, and temperance.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-highlight">Sitemap</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-parchment/75 hover:text-highlight">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-highlight">Newsletter</h3>
          <form className="mt-4 space-y-3">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Email address" className="w-full rounded-sm border border-parchment/30 bg-parchment px-3 py-3 text-sm text-ink placeholder:text-ink/45 focus:outline-none focus:ring-2 focus:ring-gold" />
            <button type="submit" className="w-full rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-white hover:bg-highlight hover:text-ink focus:outline-none focus:ring-2 focus:ring-highlight">
              Walk with us
            </button>
          </form>
          <p className="mt-3 text-xs leading-5 text-parchment/60">Double opt-in newsletter. No checkout emails until commerce is enabled.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-highlight">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-parchment/75">
            <a className="flex items-center gap-2 hover:text-highlight" href={`mailto:${site.contactEmail}`}>
              <Mail size={16} /> {site.contactEmail}
            </a>
            <a className="flex items-center gap-2 hover:text-highlight" href="https://instagram.com" rel="noreferrer" target="_blank">
              <Instagram size={16} /> Instagram
            </a>
            <Link href="/legal/privacy" className="block hover:text-highlight">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
