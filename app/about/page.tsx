import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <SectionHero
        eyebrow="About Us"
        title="Illustrated stories with a steady heart."
        text="A premium story world built for young readers, adults, educators, and gift-givers."
        imageLabel="Book covers"
      />

      {/* Founding story */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-content items-start gap-12 md:grid-cols-2">
          <Reveal animation="image">
            <div className="img-zoom">
              <PlaceholderImage label="Book cover pair" aspect="wide" mood="dawn" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">The founding promise</h2>
              <div className="reading-copy has-dropcap mt-5">
                <p>
                  Inspirationally Propelled exists to make wisdom feel warm, memorable, and useful. Every story we publish is designed to help readers, young and old, take the next step with a little more clarity and a lot more heart.
                </p>
                <p>
                  The illustrations are not decoration. They are invitations to slow down, to notice, to wonder. The characters are not lessons. They are companions.
                </p>
              </div>
              <Link href="/story" className="link-reveal mt-8 inline-block font-serif font-semibold text-gold">
                Read the full story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audience personas */}
      <section className="border-t border-ink/4 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <h2 className="mb-12 font-serif text-3xl font-semibold text-ink md:text-4xl">For every kind of reader</h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {[
              {
                title: "Young readers",
                text: "Stories that meet children where they are, with characters who model good choices without moralising. Beautiful enough to return to, deep enough to grow with."
              },
              {
                title: "Adults & gift-givers",
                text: "Premium illustrated volumes that feel special to give and receive. Meaningful gifts that carry lasting value, not disposable entertainment."
              },
              {
                title: "Educators & teams",
                text: "Resources rooted in virtues that schools and organisations already value. Stories that start real conversations about character, courage, and community."
              }
            ].map((persona, i) => (
              <Reveal key={persona.title} delay={i * 0.1}>
                <article>
                  <h3 className="font-serif text-xl font-semibold text-ink">{persona.title}</h3>
                  <p className="mt-3 leading-7 text-ink/40">{persona.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise bullets */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-semibold text-ink md:text-4xl">What we stand behind</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Every illustration is original, crafted for the story it serves.",
                "Every character carries a virtue without wearing it as a label.",
                "Every page is designed for readers to return to, not race through.",
                "Every product is made to a standard we would be proud to give."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/55">
                  <span className="mt-2.5 h-1 w-4 shrink-0 bg-gold/30" />
                  <span className="text-[1.05rem] leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Step inside"
        links={[
          { href: "/ethos", label: "Our ethos", variant: "primary" },
          { href: "/team", label: "Meet the team", variant: "ghost" },
          { href: "/shop", label: "Visit the shop", variant: "ghost" }
        ]}
      />
    </>
  );
}
