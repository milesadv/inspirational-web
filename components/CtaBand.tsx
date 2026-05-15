import Link from "next/link";

type CtaBandProps = {
  title?: string;
  subtitle?: string;
  links?: Array<{ href: string; label: string; variant?: "primary" | "ghost" }>;
};

export function CtaBand({
  title = "Continue the journey",
  subtitle,
  links = [
    { href: "/team", label: "Meet the team", variant: "primary" },
    { href: "/journey", label: "Your journey", variant: "ghost" },
    { href: "/shop", label: "Shop the books", variant: "ghost" }
  ]
}: CtaBandProps) {
  return (
    <section className="border-t border-ink/6 px-6 py-20 md:py-24">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 max-w-md text-ink/40">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.variant === "primary" ? "btn-gold" : "btn-ghost"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
