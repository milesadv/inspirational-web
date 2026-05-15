import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";
import { characters } from "@/lib/site";

export const metadata = { title: "Your Journey" };

const encounterMoods: Array<"dawn" | "forest" | "warm" | "dusk"> = ["dawn", "forest", "warm", "dusk"];

export default function JourneyPage() {
  return (
    <>
      <SectionHero
        eyebrow="Your Journey"
        title="The destination is the walk."
        text="A lone traveller, four encounters, and the discovery that no one has to move forward alone."
        imageLabel="Lone traveller"
      />

      {/* Opening passage */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">The lone walker</h2>
            <div className="reading-copy has-dropcap mt-6">
              <p>
                There is a figure on the road. Just one, at first. Walking steadily, looking ahead, carrying the kind of quiet determination that does not announce itself but cannot be missed.
              </p>
              <p>
                This is where every Inspirationally Propelled story begins: with the walk. Not a quest or a chase, not an adventure that happens to someone. A journey that happens because of someone. Because they chose to take the next step.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four encounters */}
      {characters.map((character, index) => (
        <section
          key={character.slug}
          className={`px-6 py-16 md:py-24 ${index % 2 === 1 ? "section-cream" : ""}`}
        >
          <div className="mx-auto grid max-w-content items-start gap-10 md:grid-cols-2">
            <Reveal animation="image" delay={index * 0.1}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="img-zoom">
                  <PlaceholderImage
                    label={`${character.name} encounter`}
                    aspect="wide"
                    mood={encounterMoods[index]}
                  />
                </div>
                <span className="plate-caption">{character.name}, {character.epithet}</span>
              </div>
            </Reveal>
            <Reveal delay={index * 0.1 + 0.15}>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">{character.virtue}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
                  {character.name}
                </h2>
                <p className="mt-1 text-ink/35">{character.epithet}</p>
                <div className="reading-copy mt-4">
                  <p>{character.summary}</p>
                </div>
                <QuoteBlock quote={character.quote} />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* The shift */}
      <section className="border-t border-ink/4 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <div className="reading-copy">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-ink md:text-4xl">The shift</h2>
              <p>
                Somewhere along the road, the walker realises something has changed. The path has not become easier. The weather has not improved. But the walker is no longer alone. And that, it turns out, changes everything.
              </p>
              <p>
                This is the heart of the Inspirationally Propelled journey: the moment solitary becomes shared, the moment courage finds company, the moment wisdom stops being a theory and becomes a practice, walked out in real time, with real companions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-6 py-24 text-center md:py-32">
        <Reveal animation="scale" delay={0.1}>
          <p className="font-serif text-4xl font-semibold text-forest md:text-6xl lg:text-7xl">
            You are not alone.
          </p>
          <hr className="gold-rule mx-auto mt-10 max-w-[48px]" />
        </Reveal>
      </section>

      <CtaBand
        title="Keep walking"
        subtitle="The next step is yours."
        links={[
          { href: "/team", label: "Meet the team", variant: "primary" },
          { href: "/shop", label: "Shop the books", variant: "ghost" }
        ]}
      />
    </>
  );
}
