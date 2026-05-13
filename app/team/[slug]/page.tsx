import { notFound } from "next/navigation";
import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { characters } from "@/lib/site";

type CharacterPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return characters.map((character) => ({ slug: character.slug }));
}

export function generateMetadata({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.slug === params.slug);
  return {
    title: character ? `${character.name} ${character.epithet}` : "Character"
  };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.slug === params.slug);

  if (!character) {
    notFound();
  }

  const others = characters.filter((item) => item.slug !== character.slug);

  return (
    <>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <PlaceholderImage label={`${character.name} portrait with ${character.animal}`} aspect="portrait" className="shadow-soft" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">{character.virtue}</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-ink md:text-7xl">{character.name}</h1>
            <p className="mt-3 text-2xl font-medium text-forest">{character.epithet}</p>
            <div className="mt-8 grid gap-3 rounded-md border border-gold/25 bg-white/35 p-5 text-sm md:grid-cols-2">
              <p><span className="font-semibold">Virtue:</span> {character.virtue}</p>
              <p><span className="font-semibold">Animal:</span> {character.animal}</p>
              <p className="md:col-span-2"><span className="font-semibold">Origin:</span> {character.origin}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-reading reading-copy">
          <p>{character.summary}</p>
          <p>Profile paragraphs, animal spirit detail, and the Stoic thread from Spencer&rsquo;s narrative will be added here in the content pass.</p>
          <QuoteBlock quote={character.quote} />
        </div>
      </section>
      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-4xl font-semibold">Meet the others</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((item) => <CharacterCard key={item.slug} character={item} compact />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
