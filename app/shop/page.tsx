import { ProductCard } from "@/components/ProductCard";
import { SectionHero } from "@/components/SectionHero";
import { products } from "@/lib/site";

export const metadata = { title: "The Shop" };

export default function ShopPage() {
  const books = products.filter((product) => product.type === "Book");
  const prints = products.filter((product) => product.type === "Print");

  return (
    <>
      <SectionHero eyebrow="The Shop" title="Our stories are waiting for you." text="Books and illustration prints, with checkout held behind a feature flag until the commerce platform is confirmed." imageLabel="Shop hero" />
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-content flex-wrap gap-3">
          {["All", "Books", "Prints", "Coming Soon"].map((filter) => (
            <button key={filter} type="button" className="rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-ink hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold">
              {filter}
            </button>
          ))}
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-4xl font-semibold">Books</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {books.map((product) => <ProductCard key={product.title} product={product} />)}
          </div>
        </div>
      </section>
      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-4xl font-semibold">Illustration prints</h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/70">Twelve print placeholders are ready for final image selection. Each is priced at £19.99 plus postage and packaging.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prints.map((product) => <ProductCard key={product.title} product={product} />)}
          </div>
        </div>
      </section>
      <section className="px-6 py-12">
        <div className="mx-auto max-w-content rounded-md border border-gold/25 bg-white/35 p-6">
          <h2 className="font-serif text-3xl font-semibold">Shipping note</h2>
          <p className="mt-3 leading-7 text-ink/70">Shipping, free-shipping threshold, and returns copy will be finalised once commerce decisions are confirmed.</p>
        </div>
      </section>
    </>
  );
}
