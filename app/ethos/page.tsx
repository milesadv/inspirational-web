import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Reveal } from "@/components/Reveal";
import { SectionHero } from "@/components/SectionHero";
import { virtues } from "@/lib/site";

export const metadata = { title: "Our Ethos" };

export default function EthosPage() {
  return (
    <>
      <SectionHero
        eyebrow="Our Ethos"
        title="Stoical wisdom for the road in front of us."
        text="Ancient ideas, translated into choices children and grown-ups can recognise."
      />

      {/* Opening passage */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal animation="fade">
            <QuoteBlock
              quote="You have power over your mind, not outside events. Realise this, and you will find strength."
              cite="Marcus Aurelius"
              size="large"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="reading-copy has-dropcap mt-10">
              <p>
                The Stoics believed that the good life is not found in what happens to us, but in how we respond. That wisdom, courage, justice, and temperance are not academic categories but daily choices, available to everyone, at every age.
              </p>
              <p>
                Inspirationally Propelled carries these ideas forward, not as philosophy lectures, but as stories. Stories where young readers meet characters who face real decisions, where every page invites the reader to pause, notice, and choose well.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Virtue cards */}
      <section className="border-t border-ink/4 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content">
          <Reveal delay={0.1}>
            <h2 className="mb-12 font-serif text-3xl font-semibold text-ink md:text-4xl">The four virtues</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {virtues.map((virtue, i) => (
              <Reveal key={virtue.title} delay={i * 0.1}>
                <Link
                  href={virtue.href}
                  className="group block focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <h3 className="font-serif text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-gold">
                    {virtue.title}
                  </h3>
                  <p className="mt-2 leading-7 text-ink/40">{virtue.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Five principles */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <h2 className="mb-10 font-serif text-3xl font-semibold text-ink md:text-4xl">The daily practice</h2>
          </Reveal>
          <ol className="space-y-6">
            {[
              "Notice what is in your control.",
              "Pause before you react.",
              "Choose the next right action.",
              "Walk with others where you can.",
              "Return to the path when you drift."
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.1}>
                <li className="flex items-start gap-5 border-b border-ink/4 pb-6 last:border-b-0">
                  <span className="font-serif text-lg font-semibold text-gold/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] text-ink/60">{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-reading">
          <Reveal delay={0.1}>
            <div className="reading-copy">
              <h2 className="mb-5 font-serif text-3xl font-semibold text-ink">Why it matters today</h2>
              <p>
                In a world that moves fast and speaks loud, these old ideas offer something rare: a pause. A chance to decide what kind of person you want to be before the moment passes. That is what every Inspirationally Propelled story is built to do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Explore further"
        links={[
          { href: "/team", label: "Meet the team", variant: "primary" },
          { href: "/journey", label: "Your journey", variant: "ghost" },
          { href: "/shop", label: "Shop the books", variant: "ghost" }
        ]}
      />
    </>
  );
}
