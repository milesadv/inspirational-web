import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { SectionHero } from "@/components/SectionHero";
import { characters } from "@/lib/site";

export const metadata = { title: "The Team" };

export default function TeamPage() {
  return (
    <>
      <SectionHero eyebrow="The Team" title="Four guides for the road ahead." text="Arden, Roscoe, Zephyr, and Kael each carry a virtue into the story world." imageLabel="Group illustration" />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-reading reading-copy">
          <p>The team overview is scaffolded for the final introduction and character copy from Spencer&rsquo;s narrative.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-content gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character) => <CharacterCard key={character.slug} character={character} />)}
        </div>
      </section>
      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto max-w-content rounded-md border border-gold/25 bg-parchment p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">The Lion</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">A presence, not a profile.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-ink/70">Framed callout prepared for the Lion&rsquo;s role in the wider narrative.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
