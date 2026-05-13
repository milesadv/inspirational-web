import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProductCard } from "@/components/ProductCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { characters, pillars, products } from "@/lib/site";

export default function HomePage() {
  const liveBooks = products.filter((product) => product.type === "Book").slice(0, 2);

  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-forest text-parchment">
        <div className="absolute inset-0 opacity-35">
          <PlaceholderImage label="Home hero illustration" aspect="wide" className="h-full rounded-none border-0" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-content flex-col justify-center px-6 py-20">
          <p className="mb-5 text-6xl font-serif text-gold">“</p>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.04] md:text-7xl">Stories that help the next step feel possible.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/78">A warm, illustrated world for readers learning courage, clarity, and companionship through Stoical wisdom.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-sm bg-gold px-6 py-3 font-semibold text-white hover:bg-highlight hover:text-ink focus:outline-none focus:ring-2 focus:ring-highlight">Visit the shop</Link>
            <Link href="/story" className="rounded-sm border border-parchment/60 px-6 py-3 font-semibold text-parchment hover:bg-parchment hover:text-forest focus:outline-none focus:ring-2 focus:ring-highlight">Read our story</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-content gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-md border border-gold/20 bg-white/35 p-6">
                <Icon className="text-gold" size={28} aria-hidden="true" />
                <h2 className="mt-5 font-serif text-3xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-content">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Books</p>
              <h2 className="font-serif text-4xl font-semibold">The opening volumes</h2>
            </div>
            <Link href="/shop" className="font-semibold text-gold hover:text-forest">Browse the shop</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {liveBooks.map((product) => <ProductCard key={product.title} product={product} />)}
          </div>
        </div>
      </section>

      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-4xl font-semibold">Meet the team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((character) => <CharacterCard key={character.slug} character={character} compact />)}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-center">
          <div className="reading-copy">
            <h2 className="mb-5 font-serif text-4xl font-semibold text-ink">A practical ethos, gently told</h2>
            <p>Inspirationally Propelled translates old wisdom into scenes, characters, and choices that young readers can feel without being lectured.</p>
            <Link href="/ethos" className="mt-6 inline-flex rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-white hover:bg-forest focus:outline-none focus:ring-2 focus:ring-gold">Explore our ethos</Link>
          </div>
          <QuoteBlock quote="What matters is not merely where the road leads, but who we become while walking it." cite="Founder note placeholder" />
        </div>
      </section>
      <CtaBand title="Walk with us" links={[{ href: "/journey", label: "Start the journey", variant: "primary" }, { href: "/story", label: "Read Spencer's story", variant: "ghost" }]} />
    </>
  );
}
