import Link from "next/link";
import { BookShowcase } from "@/components/BookShowcase";
import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { characters, pillars, products } from "@/lib/site";

export default function HomePage() {
  const allBooks = products.filter((p) => p.type === "Book");

  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[100svh] items-center px-6">
        <div className="mx-auto w-full max-w-content py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Reveal delay={0.1}>
                <p className="font-serif text-[1.15rem] italic text-gold/70 md:text-[1.35rem]">
                  &ldquo;Stories that help the next step feel possible.&rdquo;
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <h1 className="mt-6 font-serif text-[2.8rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[3.5rem] md:text-[4.5rem] lg:text-[4rem] xl:text-[4.5rem]">
                  Illustrated wisdom for every reader.
                </h1>
              </Reveal>

              <Reveal delay={0.45}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/40">
                  A warm, illustrated world shaped by Stoical wisdom, for readers learning courage, clarity, and companionship.
                </p>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/shop" className="btn-gold">Visit the shop</Link>
                  <Link href="/story" className="btn-ghost text-ink/50">Read our story</Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3} animation="fade">
              <BookShowcase books={allBooks} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-warm px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="text-center text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">
              What we believe
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.12}>
                <Link
                  href={pillar.href}
                  className="group block rounded-sm bg-parchment/60 p-8 transition-all duration-700 hover:bg-parchment hover:shadow-[0_8px_30px_rgba(26,26,26,0.04)] md:p-10"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <div className="mb-5 h-px w-0 bg-gold/40 transition-all duration-700 group-hover:w-12" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }} />
                  <h3 className="font-serif text-[1.4rem] font-semibold text-ink transition-colors duration-500 group-hover:text-gold md:text-[1.6rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-7 text-ink/45">{pillar.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-ink/4 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">The Team</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
                  Four guides for the road
                </h2>
              </div>
              <Link href="/team" className="link-reveal font-serif font-semibold text-gold">
                Meet them all
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((character, i) => (
              <Reveal key={character.slug} delay={i * 0.1}>
                <CharacterCard character={character} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ETHOS TEASER */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-content items-start gap-16 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">Our Ethos</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink md:text-4xl">
                A practical ethos, gently told
              </h2>
              <div className="reading-copy has-dropcap mt-6">
                <p>
                  Inspirationally Propelled translates old wisdom into scenes, characters, and choices that young readers can feel without being lectured. The Stoics believed the good life is built from daily choices, not grand gestures.
                </p>
              </div>
              <Link href="/ethos" className="link-reveal mt-8 inline-block font-serif font-semibold text-gold">
                Explore our ethos
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <QuoteBlock
              quote="What matters is not merely where the road leads, but who we become while walking it."
              cite="Founder note"
              size="large"
            />
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-t border-ink/4 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid items-start gap-12 md:grid-cols-[5fr_7fr]">
            <Reveal animation="image">
              <div>
                <PlaceholderImage label="Spencer Hall" aspect="portrait" mood="warm" />
                <span className="plate-caption">Spencer Hall, founder</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">
                  A note from Spencer
                </h2>
                <div className="reading-copy has-dropcap mt-6">
                  <p>
                    This project began with one simple conviction: that the old ideas about how to live well are not old at all. They are waiting, patiently, for stories brave enough to carry them forward.
                  </p>
                  <p>
                    Every illustration, every character, every page is an invitation to walk a little further, see a little more clearly, and know that the next step is always possible.
                  </p>
                </div>
                <Link href="/story" className="link-reveal mt-8 inline-block font-serif font-semibold text-gold">
                  Read Spencer&rsquo;s full story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-md text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">
              Walk with us
            </h2>
            <p className="mt-4 text-ink/35">
              Quiet updates on new stories, prints, and the journey ahead.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="home-email">Email address</label>
              <input
                id="home-email"
                type="email"
                placeholder="Your email address"
                className="flex-1 border-b border-ink/10 bg-transparent px-1 py-3 text-sm text-ink placeholder:text-ink/25 focus:border-gold focus:outline-none"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
            </form>
            <p className="mt-4 text-[0.68rem] text-ink/20">
              Double opt-in. Unsubscribe any time. No spam.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="The road is open"
        subtitle="Start anywhere. Every page is a first step."
        links={[
          { href: "/journey", label: "Start the journey", variant: "primary" },
          { href: "/story", label: "Read Spencer's story", variant: "ghost" }
        ]}
      />
    </>
  );
}
