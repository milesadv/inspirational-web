import { PlaceholderImage } from "@/components/PlaceholderImage";

type SectionHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  imageLabel?: string;
};

export function SectionHero({ eyebrow, title, text, imageLabel }: SectionHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gold/20 bg-parchment">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">{eyebrow}</p> : null}
          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-ink md:text-6xl">{title}</h1>
          {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">{text}</p> : null}
        </div>
        {imageLabel ? <PlaceholderImage label={imageLabel} aspect="wide" className="shadow-soft" /> : null}
      </div>
    </section>
  );
}
