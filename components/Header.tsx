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
  const headerHeight = scrolled ? 72 : 96;

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
        style={{ height: `${headerHeight}px`, transition: "height 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group shrink-0 text-ink focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label={`${site.name} home`}
        >
          <span className="font-serif text-[1.4rem] font-semibold leading-none tracking-tight transition-colors duration-300 group-hover:text-gold md:text-[1.7rem]">
            <span className="lg:hidden">IP</span>
            <span className="hidden lg:inline">Inspirationally Propelled</span>
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
        className={`fixed inset-x-0 bottom-0 z-40 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "rgba(26, 26, 26, 0.08)",
          top: `${headerHeight}px`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        className={`fixed inset-x-0 bottom-0 z-50 bg-parchment/95 px-6 pb-10 pt-7 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
        style={{
          top: `${headerHeight}px`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col justify-center">
          <div className="grid gap-2">
            {navItems.map((item, index) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-4 py-1 font-serif text-[clamp(2.15rem,10vw,4.2rem)] font-semibold leading-[0.98] tracking-tight transition-all duration-300 ${
                    active
                      ? "text-ink"
                      : "text-ink/35 hover:translate-x-1 hover:text-ink/75"
                  }`}
                  style={{
                    transitionDelay: open ? `${index * 35}ms` : "0ms",
                    transform: open ? "translateX(0)" : "translateX(-8px)"
                  }}
                  onClick={() => setOpen(false)}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-1 block h-3 w-3 shrink-0 transition-all duration-300 ${
                      active ? "bg-gold opacity-100" : "bg-gold opacity-0 group-hover:opacity-60"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
