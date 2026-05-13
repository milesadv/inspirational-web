import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHero } from "@/components/SectionHero";
import { characters } from "@/lib/site";

export const metadata = { title: "Your Journey" };

export default function JourneyPage() {
  return (
    <>
      <SectionHero eyebrow="Your Journey" title="The destination is the walk." text="A lone traveller, four encounters, and the discovery that no one has to move forward alone." imageLabel="Lone traveller" />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-reading reading-copy">
          <h2 className="mb-5 font-serif text-4xl font-semibold text-ink">The lone walker</h2>
          <p>Opening journey copy from Spencer&rsquo;s narrative will sit here, setting the emotional path before the encounters begin.</p>
        </div>
      </section>
      <section className="space-y-16 px-6 py-16">
        {characters.map((character, index) => (
          <article key={character.slug} className="mx-auto grid max-w-content gap-8 md:grid-cols-2 md:items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <PlaceholderImage label={`${character.name} encounter`} aspect="wide" />
            </div>
            <div className="reading-copy">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">{character.virtue}</p>
              <h2 className="mb-4 font-serif text-4xl font-semibold text-ink">{character.name}</h2>
              <p>{character.summary}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="px-6 py-20 text-center">
        <p className="font-serif text-5xl font-semibold text-forest md:text-7xl">You are not alone.</p>
      </section>
      <CtaBand />
    </>
  );
}
