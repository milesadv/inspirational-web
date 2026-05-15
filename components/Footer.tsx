import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/6 px-6 pt-16 pb-10">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-xl font-semibold text-ink">{site.name}</h2>
          <p className="mt-4 text-sm leading-7 text-ink/35">
            Stories to help readers walk with wisdom, courage, justice, and temperance.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink/30">Explore</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/40 transition-colors duration-300 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink/30">Newsletter</h3>
          <p className="mt-5 text-sm leading-6 text-ink/35">
            Be the first to hear about new stories, prints, and quiet updates.
          </p>
          <form className="mt-4">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <div className="flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 border-b border-ink/10 bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-ink/20 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="text-sm font-semibold text-gold transition-colors duration-300 hover:text-forest focus:outline-none focus:ring-2 focus:ring-gold"
              >
                Join
              </button>
            </div>
          </form>
          <p className="mt-3 text-[0.68rem] text-ink/20">
            Double opt-in. Unsubscribe any time.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink/30">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-ink/35">
            <a className="flex items-center gap-2 transition-colors duration-300 hover:text-ink" href={`mailto:${site.contactEmail}`}>
              <Mail size={14} /> {site.contactEmail}
            </a>
            <a className="flex items-center gap-2 transition-colors duration-300 hover:text-ink" href="https://instagram.com" rel="noreferrer" target="_blank">
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 flex max-w-content flex-col items-center justify-between gap-3 border-t border-ink/4 pt-6 text-[0.68rem] text-ink/20 md:flex-row">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/legal/privacy" className="transition-colors hover:text-ink/40">Privacy Policy</Link>
          <Link href="/legal/terms" className="transition-colors hover:text-ink/40">Terms</Link>
          <Link href="/legal/cookies" className="transition-colors hover:text-ink/40">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
