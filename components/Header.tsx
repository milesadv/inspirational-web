"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-parchment/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6">
        <Link href="/" className="font-serif text-2xl font-semibold leading-none text-ink focus:outline-none focus:ring-2 focus:ring-gold">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink/75 transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/shop" className="rounded-full p-2 text-ink hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold" aria-label="Open shop">
            <ShoppingBag size={22} />
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-ink hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-gold/20 px-6 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-content gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-sm px-3 py-3 font-medium text-ink hover:bg-white/40" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
