import type { Product } from "@/lib/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const shopEnabled = process.env.NEXT_PUBLIC_SHOP_ENABLED === "true";

export function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.status === "Coming Soon";

  return (
    <article className="group">
      {/* Image */}
      <div className="relative img-zoom">
        <PlaceholderImage
          label={product.imageLabel}
          aspect={product.type === "Book" ? "book" : "square"}
          mood={isComingSoon ? "mist" : "warm"}
        />
        {isComingSoon ? (
          <div className="absolute inset-0 flex items-end justify-start p-4">
            <span className="bg-forest px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-parchment">
              Coming Soon
            </span>
          </div>
        ) : null}
      </div>

      {/* Details */}
      <div className="pt-4">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">
          {product.type}
        </p>
        <h3 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-ink">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-ink/40">
          {product.price ?? "Join the list for updates"}
        </p>
        <button
          className="mt-4 w-full border border-ink/10 bg-transparent px-4 py-2.5 text-[0.82rem] font-semibold text-ink transition-all duration-300 hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold disabled:cursor-not-allowed disabled:text-ink/25 disabled:hover:border-ink/10"
          disabled={isComingSoon || !shopEnabled}
          type="button"
        >
          {isComingSoon ? "Notify Me" : shopEnabled ? "Add to Bag" : "Checkout Soon"}
        </button>
      </div>
    </article>
  );
}
