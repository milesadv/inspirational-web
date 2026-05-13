import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const shopEnabled = process.env.NEXT_PUBLIC_SHOP_ENABLED === "true";

export function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.status === "Coming Soon";

  return (
    <article className="relative overflow-hidden rounded-md border border-gold/20 bg-white/40 p-4">
      {isComingSoon ? (
        <div className="absolute right-[-42px] top-5 z-10 rotate-45 bg-ink px-12 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white">
          Coming Soon
        </div>
      ) : null}
      <PlaceholderImage label={product.imageLabel} aspect={product.type === "Book" ? "book" : "square"} />
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">{product.type}</p>
        <h3 className="mt-2 min-h-14 font-serif text-2xl font-semibold leading-7 text-ink">{product.title}</h3>
        <p className="mt-2 text-sm font-medium text-ink/70">{product.price ?? "Join the list for updates"}</p>
        <button
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-white transition hover:bg-forest focus:outline-none focus:ring-2 focus:ring-gold disabled:cursor-not-allowed disabled:bg-ink/25"
          disabled={isComingSoon || !shopEnabled}
          type="button"
        >
          <ShoppingBag size={17} aria-hidden="true" />
          {isComingSoon ? "Notify Me" : shopEnabled ? "Add to Bag" : "Checkout Soon"}
        </button>
      </div>
    </article>
  );
}
