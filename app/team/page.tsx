import { CharacterCard } from "@/components/CharacterCard";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";
import { characters } from "@/lib/site";

export const metadata = { title: "The Team" };

export default function TeamPage() {
  return (
    <>
      <SectionHero
        eyebrow="The Team"
        title="Four guides for the road ahead."
        text="Arden, Roscoe, Zephyr, and Kael each carry a virtue into the story world."
      />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <div className="reading-copy has-dropcap">
              <p>
                Each character was born from a question: what would this virtue look like if it had a face, a voice, and a journey of its own? Not a lesson in disguise, but a companion. Someone a reader could walk alongside and, without being told, understand something about wisdom, courage, justice, or temperance.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-content gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character, i) => (
            <Reveal key={character.slug} delay={i * 0.1}>
              <CharacterCard character={character} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Lion */}
      <section className="border-t border-ink/4 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.15}>
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">The Lion</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink md:text-4xl">
                A presence, not a profile.
              </h2>
              <div className="reading-copy mt-5">
                <p>
                  The Lion does not have a character page. He is not one of the four. He is what they walk towards, what the journey asks of them. His presence runs through every story, every choice, every moment where doing the right thing costs something. You will know him when you meet him.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Walk the path"
        links={[
          { href: "/journey", label: "Your journey", variant: "primary" },
          { href: "/ethos", label: "Our ethos", variant: "ghost" },
          { href: "/shop", label: "Shop the books", variant: "ghost" }
        ]}
      />
    </>
  );
}
