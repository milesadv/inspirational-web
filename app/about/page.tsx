import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHero } from "@/components/SectionHero";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <SectionHero eyebrow="About Us" title="Illustrated stories with a steady heart." text="A premium story world built for young readers, adults, educators, and gift-givers." imageLabel="Book covers" />
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-center">
          <PlaceholderImage label="Book cover pair" aspect="wide" />
          <div className="reading-copy">
            <h2 className="mb-5 font-serif text-4xl font-semibold text-ink">The founding promise</h2>
            <p>Inspirationally Propelled exists to make wisdom feel warm, memorable, and useful. The production copy from Spencer&rsquo;s narrative will live here in the next content pass.</p>
            <p>For now, the layout is ready for the founding story, book introductions, audience promises, and conversion paths.</p>
            <Link href="/story" className="mt-6 inline-flex font-semibold text-gold hover:text-forest">Read the full story</Link>
          </div>
        </div>
      </section>
      <section className="bg-white/25 px-6 py-16">
        <div className="mx-auto grid max-w-content gap-5 md:grid-cols-3">
          {["Young readers", "Adults & gift-givers", "Educators & teams"].map((title) => (
            <article key={title} className="rounded-md border border-gold/20 bg-parchment p-6">
              <h2 className="font-serif text-3xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-ink/70">Persona block prepared for final narrative copy and audience-specific benefits.</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
