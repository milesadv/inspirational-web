"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

const mainNav = navItems.filter((item) => item.href !== "/shop");

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(246,241,231,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(26,26,26,0.04)" : "none"
      }}
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-6"
        style={{ height: scrolled ? "72px" : "96px", transition: "height 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group shrink-0 text-ink focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label={`${site.name} home`}
        >
          <span className="font-serif text-[1.4rem] font-semibold leading-none tracking-tight transition-colors duration-300 group-hover:text-gold md:text-[1.7rem]">
            <span className="sm:hidden">Inspirationally</span>
            <span className="hidden sm:inline">Inspirationally Propelled</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-modern-link ${active ? "is-active text-ink" : "text-ink/40 hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <span className="mx-1 h-4 w-px bg-ink/8" aria-hidden="true" />
          <Link
            href="/shop"
            className={`nav-modern-link ${pathname === "/shop" ? "is-active text-ink" : "text-ink/40 hover:text-ink"}`}
          >
            Shop
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-ink/40 transition-colors duration-300 hover:text-ink focus:outline-none focus:ring-2 focus:ring-gold"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[96px] z-40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(26,26,26,0.1)" }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        className={`fixed left-0 right-0 top-[96px] z-50 border-b border-ink/4 bg-parchment px-6 pb-8 pt-4 transition-all duration-500 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block border-b border-ink/4 py-4 font-serif text-[1.05rem] font-semibold text-ink/40 transition-colors duration-200 last:border-b-0 hover:text-ink ${
              pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                ? "text-ink"
                : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
