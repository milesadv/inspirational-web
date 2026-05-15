import Link from "next/link";
import { notFound } from "next/navigation";
import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { characters } from "@/lib/site";

type CharacterPageProps = {
  params: {
    slug: string;
  };
};

const characterMoods: Record<string, "warm" | "forest" | "dawn" | "dusk"> = {
  arden: "dawn",
  roscoe: "forest",
  zephyr: "warm",
  kael: "dusk"
};

const characterNarratives: Record<string, { profile: string; animalSpirit: string; stoicThread: string }> = {
  arden: {
    profile: "Arden is the one who pauses when others rush. High above the noise, the Eagle sees what most miss: the full picture, the longer path, the quieter truth. Arden does not lecture. Arden simply sees clearly and acts on what is true.",
    animalSpirit: "The Eagle is not about dominance or spectacle. It is about perspective. Rising above the immediate to see what matters. Arden's gift is the willingness to wait, to look twice, and to trust that clarity comes to those who give it room.",
    stoicThread: "Wisdom is the first of the four Stoic virtues because without it the other three lose their direction. Courage without wisdom becomes recklessness. Justice without wisdom becomes rigidity. Temperance without wisdom becomes passivity. Arden carries this truth through every story."
  },
  roscoe: {
    profile: "Roscoe does not roar. The Stag stands its ground not through aggression but through quiet, unshakeable resolve. When the path gets steep, when the weather turns, Roscoe is the one who keeps walking. Not because the difficulty does not matter, but because stopping is not the answer.",
    animalSpirit: "The Stag in the woodland is grace under pressure. Its strength is not the kind that breaks things. It is the kind that endures. Roscoe teaches readers that courage is not the absence of fear, but the decision to keep moving despite it.",
    stoicThread: "Courage, for the Stoics, was never about heroics. It was about doing what needs to be done, steadily, without drama, even when it is hard. Roscoe is that virtue made visible: brave progress, one honest step at a time."
  },
  zephyr: {
    profile: "Zephyr moves quickly, but never carelessly. The Rabbit brings lightness and pace, showing that speed is a gift only when it is guided by attention. Zephyr reminds readers that restraint is not weakness. It is strength with better aim.",
    animalSpirit: "The Rabbit is fast, alert, and gentle. It survives not by fighting but by sensing, adapting, and choosing well in the moment. Zephyr carries that energy: the ability to respond without overreacting, to move without trampling.",
    stoicThread: "Temperance is the Stoic virtue most easily misunderstood. It is not about denial. It is about proportion, knowing how much is enough, when to act and when to wait, when speed serves and when it hinders. Zephyr lives this balance."
  },
  kael: {
    profile: "Kael sees what others prefer not to look at. The Raven is not interested in comfortable stories or easy answers. Kael's gift is honesty, the kind that costs something, the kind that holds a mirror up and asks: is this fair? Is this true? Is this right?",
    animalSpirit: "The Raven sits in the shadow, watching. Not from malice, but from duty. It sees what is hidden, what is avoided, what is inconvenient. Kael carries that clarity into the story world, asking the questions nobody else will.",
    stoicThread: "Justice, in the Stoic tradition, is not punishment. It is responsibility. Fairness. Treating others as they deserve. Kael reminds readers that doing the right thing is not always popular, but it is always necessary."
  }
};

export function generateStaticParams() {
  return characters.map((character) => ({ slug: character.slug }));
}

export function generateMetadata({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.slug === params.slug);
  return {
    title: character ? `${character.name} - ${character.epithet}` : "Character"
  };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.slug === params.slug);

  if (!character) {
    notFound();
  }

  const others = characters.filter((item) => item.slug !== character.slug);
  const mood = characterMoods[character.slug] ?? "warm";
  const narrative = characterNarratives[character.slug];

  return (
    <>
      {/* Hero section */}
      <section className="px-6 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-content gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <Reveal animation="image">
            <div>
              <PlaceholderImage
                label={`${character.name} portrait with ${character.animal}`}
                aspect="portrait"
                mood={mood}
              />
              <span className="plate-caption">{character.name}, {character.epithet}</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">{character.virtue}</p>
              <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl lg:text-7xl">
                {character.name}
              </h1>
              <p className="mt-2 text-xl text-ink/35">{character.epithet}</p>

              <div className="mt-8 grid gap-x-6 gap-y-3 border-t border-ink/6 pt-6 text-sm md:grid-cols-2">
                <div>
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">Virtue</span>
                  <p className="mt-1 text-ink/70">{character.virtue}</p>
                </div>
                <div>
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">Animal Spirit</span>
                  <p className="mt-1 text-ink/70">{character.animal}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">Origin</span>
                  <p className="mt-1 text-ink/70">{character.origin}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profile */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <div className="reading-copy has-dropcap">
              <p>{narrative.profile}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} animation="fade">
            <QuoteBlock quote={character.quote} size="large" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="reading-copy">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-ink">The {character.animal}</h2>
              <p>{narrative.animalSpirit}</p>
            </div>
          </Reveal>

          <Reveal animation="fade">
            <hr className="gold-rule my-10" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="reading-copy">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-ink">The Stoic thread</h2>
              <p>{narrative.stoicThread}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet the others */}
      <section className="border-t border-ink/4 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="font-serif text-3xl font-semibold text-ink">Meet the others</h2>
              <Link href="/team" className="link-reveal inline-block font-serif font-semibold text-gold">
                View full team
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.1}>
                <CharacterCard character={item} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Continue the journey"
        links={[
          { href: "/journey", label: "Your journey", variant: "primary" },
          { href: "/shop", label: "Shop the books", variant: "ghost" }
        ]}
      />
    </>
  );
}
