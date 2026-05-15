import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";
import { products } from "@/lib/site";

export const metadata = { title: "The Shop" };

export default function ShopPage() {
  const books = products.filter((product) => product.type === "Book");
  const prints = products.filter((product) => product.type === "Print");

  return (
    <>
      <SectionHero
        eyebrow="The Shop"
        title="Our stories are waiting for you."
        text="Books and illustration prints, beautifully made and ready to be held."
      />

      {/* Filter pills */}
      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-content flex-wrap gap-2">
          {["All", "Books", "Prints", "Coming Soon"].map((filter, i) => (
            <button
              key={filter}
              type="button"
              className={`border px-4 py-2 text-[0.8rem] font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                i === 0
                  ? "border-ink bg-ink text-parchment"
                  : "border-ink/10 text-ink/40 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Books */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <div className="mb-10">
              <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">Illustrated volumes</h2>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {books.map((product, i) => (
              <Reveal key={product.title} delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-content" />

      {/* Prints */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <div className="mb-10">
              <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">Illustration prints</h2>
              <p className="mt-3 max-w-xl leading-7 text-ink/40">
                Original illustrations from the books, printed on archival-quality paper. Each one is a piece of the story world, ready to frame.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {prints.map((product, i) => (
              <Reveal key={product.title} delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping info */}
      <section className="border-t border-ink/4 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { label: "Shipping", text: "UK standard delivery. International shipping available on request." },
                { label: "Quality", text: "Every book is printed on premium stock. Every print is archival quality." },
                { label: "Returns", text: "Full returns policy available once checkout is live. Your satisfaction matters." }
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/40">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-md text-center">
          <Reveal delay={0.1} animation="scale">
            <h2 className="font-serif text-3xl font-semibold text-ink">
              New titles coming soon
            </h2>
            <p className="mt-3 text-ink/35">
              Join the newsletter to hear about new releases, limited prints, and updates from the story world.
            </p>
            <Link href="/" className="btn-gold mt-8 inline-flex">
              Join the list
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
