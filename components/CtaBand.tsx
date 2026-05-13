import Link from "next/link";

type CtaBandProps = {
  title?: string;
  links?: Array<{ href: string; label: string; variant?: "primary" | "ghost" }>;
};

export function CtaBand({
  title = "Continue the journey",
  links = [
    { href: "/team", label: "Meet the team", variant: "primary" },
    { href: "/journey", label: "Your journey", variant: "ghost" },
    { href: "/shop", label: "Shop the books", variant: "ghost" }
  ]
}: CtaBandProps) {
  return (
    <section className="bg-forest px-6 py-12 text-parchment">
      <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-4xl font-semibold">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold ${
                link.variant === "primary" ? "bg-gold text-white hover:bg-parchment hover:text-forest" : "border border-parchment/50 text-parchment hover:bg-parchment hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
