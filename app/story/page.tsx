import { CtaBand } from "@/components/CtaBand";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SectionHero } from "@/components/SectionHero";

export const metadata = { title: "Our Story" };

export default function StoryPage() {
  return (
    <>
      <SectionHero eyebrow="Our Story" title="The story behind the stories." text={"A founder's note, a turning point, and the forward path for Inspirationally Propelled."} imageLabel="Spencer Hall portrait" />
      <section className="px-6 py-16">
        <article className="mx-auto max-w-reading reading-copy">
          <p>Signed opening paragraph from Spencer&rsquo;s narrative will go here. The page is ready for long-form copy with steady rhythm and pull-quotes.</p>
          <p>Each section can be extended without changing the layout, giving the full narrative room to breathe on desktop and mobile.</p>
          <QuoteBlock quote="The turning point was not a single destination, but a different way of walking." />
          <div className="my-10 rounded-md border border-gold/25 bg-white/40 p-6">
            <h2 className="font-serif text-3xl font-semibold text-ink">The turning point</h2>
            <p className="mt-3">Styled parchment card prepared for Spencer&rsquo;s central story moment.</p>
          </div>
          <PlaceholderImage label="Founder note image" aspect="wide" />
        </article>
      </section>
      <CtaBand title="What comes next" />
    </>
  );
}
