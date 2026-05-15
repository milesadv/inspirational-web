import { PlaceholderImage } from "@/components/PlaceholderImage";

type SectionHeroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  imageLabel?: string;
};

export function SectionHero({ eyebrow, title, text, imageLabel }: SectionHeroProps) {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-content py-24 md:py-32">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-serif text-[2.5rem] font-semibold leading-[1.08] text-ink md:text-[3.5rem] lg:text-[4.2rem]">
            {title}
          </h1>
          {text ? (
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/45">{text}</p>
          ) : null}
        </div>

        {imageLabel ? (
          <div className="mt-12">
            <PlaceholderImage label={imageLabel} aspect="hero" mood="warm" />
            <span className="plate-caption">{imageLabel}</span>
          </div>
        ) : (
          <hr className="gold-rule mt-12" />
        )}
      </div>
    </section>
  );
}
