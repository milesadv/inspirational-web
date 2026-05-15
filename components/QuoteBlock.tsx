type QuoteBlockProps = {
  quote: string;
  cite?: string;
  size?: "default" | "large";
};

export function QuoteBlock({ quote, cite, size = "default" }: QuoteBlockProps) {
  const isLarge = size === "large";

  return (
    <figure className="relative my-10 pl-6 md:pl-8">
      <div
        className="absolute left-0 top-0 h-full w-[2px]"
        style={{ background: "rgba(184, 137, 59, 0.3)" }}
      />

      <blockquote
        className={`font-serif italic leading-[1.35] text-forest ${
          isLarge ? "text-[1.6rem] md:text-[2rem]" : "text-[1.25rem] md:text-[1.45rem]"
        }`}
      >
        {quote}
      </blockquote>

      {cite ? (
        <figcaption className="mt-4 text-[0.78rem] font-medium tracking-wide text-ink/35">
          {cite}
        </figcaption>
      ) : null}
    </figure>
  );
}
