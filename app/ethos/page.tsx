import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SectionHero } from "@/components/SectionHero";
import { virtues } from "@/lib/site";

export const metadata = { title: "Our Ethos" };

export default function EthosPage() {
  return (
    <>
      <SectionHero eyebrow="Our Ethos" title="Stoical wisdom for the road in front of us." text="Ancient ideas, translated into choices children and grown-ups can recognise." imageLabel="Compass rose" />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-reading">
          <QuoteBlock quote="You have power over your mind, not outside events. Realise this, and you will find strength." cite="Marcus Aurelius" />
          <div className="reading-copy mt-10">
            <p>Final copy from Spencer&rsquo;s narrative will be placed here. This page is structured for a calm opening passage, virtue cards, five principles, and a closing relevance section.</p>
          </div>
        </div>
      </section>
      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto grid max-w-content gap-5 md:grid-cols-2">
          {virtues.map((virtue) => {
            const Icon = virtue.icon;
            return (
              <Link key={virtue.title} href={virtue.href} className="rounded-md border border-gold/20 bg-parchment p-6 transition hover:-translate-y-1 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-gold">
                <Icon size={28} className="text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-3xl font-semibold">{virtue.title}</h2>
                <p className="mt-2 leading-7 text-ink/70">{virtue.text}</p>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-reading">
          <ol className="space-y-5">
            {["Notice what is in your control.", "Pause before you react.", "Choose the next right action.", "Walk with others where you can.", "Return to the path when you drift."].map((item, index) => (
              <li key={item} className="flex gap-5 rounded-md border border-gold/20 bg-white/30 p-5">
                <span className="font-serif text-3xl font-semibold text-gold">{index + 1}</span>
                <span className="pt-1 text-lg font-medium">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
