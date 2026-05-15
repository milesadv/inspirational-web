import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";

export const metadata = { title: "Our Story" };

export default function StoryPage() {
  return (
    <>
      <SectionHero
        eyebrow="Our Story"
        title="The story behind the stories."
        text="A founder's note, a turning point, and the forward path for Inspirationally Propelled."
        imageLabel="Spencer Hall portrait"
      />

      {/* Opening passage */}
      <section className="px-6 py-20 md:py-28">
        <article className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <div className="reading-copy has-dropcap">
              <p>
                It started with a question that would not go away. Not a clever question, not a philosophical one, just a quiet, persistent feeling that the stories we tell children could do more. Not more in the sense of more pages or more characters. More in the sense of more substance. More care. More truth.
              </p>
              <p>
                That question became a notebook, the notebook became a set of characters, and the characters became a world. A world where wisdom is not taught but lived, where courage shows up in small decisions as much as grand ones, and where every reader, young or old, can find a companion for the road ahead.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} animation="fade">
            <QuoteBlock
              quote="The turning point was not a single destination, but a different way of walking."
              cite="Spencer Hall"
              size="large"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="my-12 border-l-2 border-gold/20 pl-6">
              <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
                When the path became clear
              </h2>
              <div className="reading-copy mt-4">
                <p>
                  There was a moment, somewhere between the third draft and the hundredth sketch, when the project stopped being an idea and became an obligation. Not the heavy kind, the kind that lifts you. The kind where you realise you have to do this thing, not because anyone is asking, but because not doing it would feel like leaving something important unsaid.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="reading-copy">
              <p>
                That is the spirit behind every page, every illustration, every detail in this project. It is not enough to publish good books. The books have to carry something forward. They have to be worth returning to.
              </p>
            </div>
          </Reveal>

          <Reveal animation="image" delay={0.1}>
            <div className="mt-12">
              <PlaceholderImage label="Founder note image" aspect="wide" mood="dawn" />
              <span className="plate-caption">The first sketches</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="reading-copy mt-12">
              <h2 className="mb-5 font-serif text-3xl font-semibold text-ink">What comes next</h2>
              <p>
                This is the beginning, not the middle. New stories, new characters, and new ways to carry these ideas into the world are already taking shape. If any of this resonates with you, walk with us. The road is long, the company is good, and the next step is always possible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <Link href="/journey" className="link-reveal inline-block font-serif font-semibold text-gold">
                Begin the journey
              </Link>
            </div>
          </Reveal>
        </article>
      </section>

      <CtaBand
        title="What comes next"
        subtitle="The story continues with every reader who joins."
        links={[
          { href: "/journey", label: "Your journey", variant: "primary" },
          { href: "/team", label: "Meet the team", variant: "ghost" },
          { href: "/shop", label: "Visit the shop", variant: "ghost" }
        ]}
      />
    </>
  );
}
